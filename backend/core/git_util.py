import requests
from typing import Optional

def normalize_repo_url(repo_url: str) -> str:
    repo = repo_url.rstrip("/")
    if repo.endswith(".git"):
        repo = repo[:-4]

    parts = repo.split("github.com/")[-1].split("/")
    owner = parts[0]
    name = parts[1]
    return f"{owner}/{name}"

def get_latest_commit(git_repo: str, branch: str, git_pat: Optional[str] = None):
    repo = normalize_repo_url(git_repo)
    url = f"https://api.github.com/repos/{repo}/commits?sha={branch}&per_page=1"
    
    headers = {}
    if git_pat:
        headers["Authorization"] = f"token {git_pat}"

    response = requests.get(url, headers=headers)
    response.raise_for_status()
    
    latest_commit = response.json()[0]
    commit_id = latest_commit['sha'][:6]
    commit_message = latest_commit['commit']['message']
    
    return commit_id, commit_message
