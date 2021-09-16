export const API = {
    CATEGORY: {
        GET_LIST: 'category',
        GET_ONE: (id: any) => {
            return 'category/' + id;
        },
        POST_ONE: 'category',
        UPDATE: (id: any) => {
            return 'category/' + id;
        },
        DELETE_ONE: (id: any) => {
            return 'category/' + id;
        },
        DELETE_MANY: 'category/delete-many'
    },
    SUPPLIER: {
        GET_LIST: 'supplier',
        GET_ONE: (id: any) => {
            return 'supplier/' + id;
        },
        POST_ONE: 'supplier',
        DELETE_ONE: (id: any) => {
            return 'supplier/' + id;
        },
        UPDATE: (id: any) => {
            return 'supplier/' + id;
        },
        DELETE_MANY: 'supplier/delete-many'
    },
    PRODUCT: {
        GET_LIST: 'product',
        GET_ONE: (id: any) => {
            return 'product/' + id;
        },
        POST_ONE: 'product',
        DELETE_ONE: (id: any) => {
            return 'product/' + id;
        },
        UPDATE: (id: any) => {
            return 'product/' + id;
        },
        DELETE_MANY: 'product/delete-many'
    },
    CUSTOMER: {
        GET_LIST: 'customer',
        GET_ONE: (id: any) => {
            return 'customer/' + id;
        },
        POST_ONE: 'customer',
        DELETE_ONE: (id: any) => {
            return 'customer/' + id;
        },
        UPDATE: (id: any) => {
            return 'customer/' + id;
        },
        DELETE_MANY: 'customer/delete-many'
    },
    EMPLOYE: {
        GET_LIST: 'employe',
        GET_ONE: (id: any) => {
            return 'employe/' + id;
        },
        POST_ONE: 'employe',
        DELETE_ONE: (id: any) => {
            return 'employe/' + id;
        },
        UPDATE: (id: any) => {
            return 'employe/' + id;
        },
        DELETE_MANY: 'employe/delete-many'
    },
    INVOICE: {
        GET_LIST: 'invoice',
        GET_ONE: (id: any) => {
            return 'invoice/' + id;
        },
        POST_ONE: 'invoice',
        DELETE_ONE: (id: any) => {
            return 'invoice/' + id;
        },
        UPDATE: (id: any) => {
            return 'invoice/' + id;
        },
        DELETE_MANY: 'invoice/delete-many'
    },
    INVOICE_DETAIL: {
        GET_LIST: 'invoice-detail',
        GET_ONE: (id: any) => {
            return 'invoice-detail/' + id;
        },
        POST_ONE: 'invoice-detail',
        DELETE_ONE: (id: any) => {
            return 'invoice-detail/' + id;
        },
        UPDATE: (id: any) => {
            return 'invoice-detail/' + id;
        },
        DELETE_MANY: 'invoice-detail/delete-many'
    },

};
