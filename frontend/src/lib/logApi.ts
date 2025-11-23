// src/lib/logApi.ts
const API_BASE = 'https://www.yoitang.cloud/api';

export interface LogResponse {
  log_id: number;
  deploy_id: number;
  build_log: string | null;
  deploy_log: string | null;
  application_log: string | null;
  created_date: string;
  updated_date: string | null;
}

// DB에서 로그 한 건 가져오기
export const fetchDeployLog = async (deployId: number): Promise<LogResponse> => {
  const url = `${API_BASE.replace(/\/$/, '')}/log/${deployId}`;

  const res = await fetch(url, {
    method: 'GET',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Deploy log fetch failed: ${res.status} ${text}`);
  }

  const data = (await res.json()) as LogResponse;
  return data;
};

// (필요하면) Jenkins나 백엔드에서 DB에 저장할 때 쓰는 POST
// Jenkins 파이프라인에서 호출용
export interface LogCreatePayload {
  deploy_id: number;
  build_log?: string | null;
  deploy_log?: string | null;
  application_log?: string | null;
}

export const createDeployLog = async (payload: LogCreatePayload): Promise<LogResponse> => {
  const url = `${API_BASE.replace(/\/$/, '')}/log/`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Deploy log create failed: ${res.status} ${text}`);
  }

  return (await res.json()) as LogResponse;
};
