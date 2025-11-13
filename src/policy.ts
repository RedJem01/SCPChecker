export interface SCP {
    policies: Policy[]
}

interface Policy {
    statements: Statement[];
}

interface Statement {
    sid: string;
    effect: string;
    action?: string[];
    resource?: string[];
    notResource?: string[];
    condition?: Condition;
    principal?: Principal;
    notPrincipal?: Principal;
    notAction?: string[];
}

interface Condition {
    stringEquals?: string;
    stringNotEquals?: string;
    stringEqualsIgnoreCase?: string;
    stringNotEqualsIgnoreCase?: string;
    stringLike?: string;
    stringNotLike?: string;
    numericEquals?: number;
    numericNotEquals?: number;
    numericLessThan?: number;
    numericLessThanEquals?: number;
    numericGreaterThan?: number;
    numericGreaterThanEquals?: number;
    dateEquals?: Date;
    dateNotEquals?: Date;
    dateLessThan?: Date;
    dateLessThanEquals?: Date;
    dateGreaterThan?: Date;
    dateGreaterThanEquals?: Date;
    bool?: boolean;
    binaryEquals?: Base64URLString;
    ipAddress?: string;
    notIpAddress?: string;
    arnEquals?: string;
    arnLike?: string;
    arnNotEquals?: string;
    arnNotLike?: string;
    null?: string;
}

interface Principal {
    aws?: string;
    canonicalUser?: string;
    federated?: string;
    service?: string;
    wildcard: boolean;
}