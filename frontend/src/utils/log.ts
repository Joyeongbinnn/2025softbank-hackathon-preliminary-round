export const cleanJenkinsLog = (raw: string) => {
  return raw
    .replace(/\u001b\[8m.*?\u001b\[0m/gs, "")
    .replace(/\u001b\[[0-9;]*m/g, "");
};
