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
    }

};
