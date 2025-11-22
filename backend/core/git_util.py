import requests

def get_latest_commit(git_repo: str, branch: str):
    parts = git_repo.rstrip("/").split("/")
    owner, repo = parts[-2], parts[-1]

    url = f"https://api.github.com/repos/{owner}/{repo}/commits?sha={branch}&per_page=1"
    
    response = requests.get(url)  # Public repo 기준, 토큰 없이도 가능
    response.raise_for_status()
    
    latest_commit = response.json()[0]
    commit_id = latest_commit['sha'][:6]
    commit_message = latest_commit['commit']['message']
    
    return commit_id, commit_message
