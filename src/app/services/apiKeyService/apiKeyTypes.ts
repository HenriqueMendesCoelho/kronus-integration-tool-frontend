export interface ApiKeyType {
  name: string;
  key: string;
}

export interface CreateApiKeyType {
  name: string;
}

export interface DeleteApiKeyType {
  key: string;
}
