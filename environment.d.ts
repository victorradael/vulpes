declare namespace NodeJS {
    export interface ProcessEnv {
        readonly DB_API_KEY: string
        readonly DB_AUTH_DOMAIN: string
        readonly DB_URL_DO_BANCO_DE_DADOS: string
        readonly DB_PROJECT_ID: string
        readonly DB_STORAGE_BUCKET
        readonly DB_SENDER_ID: string
        readonly DB_APP_ID: string

    }
}