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
    }
};
