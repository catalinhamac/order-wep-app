export interface Order {
    readonly id: string;
    readonly buy: boolean;
    readonly counterCcy: string;
    readonly investmentCcy: string;
    readonly limit: number;
    readonly validUntil: string;
}