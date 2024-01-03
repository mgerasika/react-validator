export interface IAccount {
    accountId: string
    accountSrcUniqueId: string
    accountSrcRefId: string
    accountName: string
    statusCode: string
    currencyCode: string
    branchId: string
    relationshipMgrId: string
    relationshipManager: IAccountRelationshipManager
    product: IAccountProduct
    dateOpened: string
    dateClosed: any
    balanceDate: any
    organisationUnit: string
    accountBalance: number
    accountBalanceBaseCurrency: number
    creditDebitCode: string
    overdraftLimit: number
    iban: any
    creditLimit: any
    blockedReason: any
    currencyCodeBase: string
    dormantStatusFlag: boolean
    frozenStatusFlag: boolean
    accountOpenChannel: string
    accountChannelRemoteFlag: boolean
    holdingBankName: string
    accountOnHoldFlag: boolean
  }
  
  export interface IAccountRelationshipManager {
    id: string
    name: string
  }
  
  export interface IAccountProduct {
    srcTypeCode: string
    name: string
    group: string
    class: string
    srcTypeDescription: string
  }