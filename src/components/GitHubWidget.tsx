'use client';

import { useEffect, useState } from 'react';
import { Star, GitFork, Github, ExternalLink } from 'lucide-react';
import { site } from '@/data/site';

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface UserStats {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubWidget() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [user, setUser] = useState<UserStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${site.githubUser}`),
          fetch(`https://api.github.com/users/${site.githubUser}/repos?sort=updated&per_page=6`),
        ]);
        if (!userRes.ok || !repoRes.ok) throw new Error('GitHub API request failed');
        const userData = await userRes.json();
        const repoData = await repoRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(repoData);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="card-surface p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <Github size={18} className="text-accent" />
          <h3 className="font-semibold text-ink">Live from GitHub</h3>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="text-xs text-ink-muted hover:text-accent flex items-center gap-1"
        >
          @{site.githubUser} <ExternalLink size={12} />
        </a>
      </div>

      {error && (
        <p className="text-sm text-ink-faint">
          Couldn&apos;t reach the GitHub API right now — view the profile directly{' '}
          <a href={site.github} target="_blank" rel="noreferrer" className="text-accent underline">
            here
          </a>
          .
        </p>
      )}

      {!error && !repos && (
        <div className="space-y-3 animate-pulse">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-14 rounded-lg bg-ink/5" />
          ))}
        </div>
      )}

      {user && (
        <div className="flex gap-6 mb-5 font-mono text-sm">
          <div>
            <span className="text-ink">{user.public_repos}</span>{' '}
            <span className="text-ink-faint">repos</span>
          </div>
          <div>
            <span className="text-ink">{user.followers}</span>{' '}
            <span className="text-ink-faint">followers</span>
          </div>
        </div>
      )}

      {repos && repos.length > 0 && (
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex items-center justify-between gap-3 rounded-lg border border-border px-3.5 py-2.5 hover:border-accent/40 hover:bg-ink/[0.03] transition-colors group"
              >
                <div className="min-w-0">
                  <p className="text-sm text-ink truncate group-hover:text-accent transition-colors">
                    {repo.name}
                  </p>
                  {repo.description && (
                    <p className="text-xs text-ink-faint truncate">{repo.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0 text-xs text-ink-faint">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {repos && repos.length === 0 && (
        <p className="text-sm text-ink-faint">No public repos returned yet — check the profile directly.</p>
      )}
    </div>
  );
}
