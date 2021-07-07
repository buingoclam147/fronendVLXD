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
        }
    }
};
