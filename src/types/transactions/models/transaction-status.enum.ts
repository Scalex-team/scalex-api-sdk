export enum TransactionStatus {
    initiated = 'initiated',
    awaitingConsumation = 'awaiting-consumation',
    processing = 'processing',
    successful = 'successful',
    failed = 'failed',
    expired = 'expired',
    cancelled = 'cancelled'
}