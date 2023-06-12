import { actionTypes } from "../actions/actionTypes";

const initialState = {
    selectUser: {
        "posts": [
            {
                "id": 1,
                "title": "json-server",
                "author": "typicode"
            }
        ],
        "comments": [
            {
                "id": 1,
                "body": "some comment",
                "postId": 1
            }
        ],
        "profile": {
            "name": "typicode"
        },
        "crypto": [
            {
                "transferAddress": 1,
                "userName": "John",
                "symbol": "611",
                "rates": 0.389165,
                "name": "SixEleven",
                "name_full": "SixEleven (611)",
                "max_supply": 611000,
                "purchasedCoins": 100,
                "icon_url": "https://assets.coinlayer.com/icons/611.png"
            },
            {
                "transferAddress": 2,
                "userName": "Smith",
                "symbol": "ABC",
                "rates": 59.99,
                "name": "AB-Chain",
                "name_full": "AB-Chain (ABC)",
                "max_supply": 210000000,
                "purchasedCoins": 55,
                "icon_url": "https://assets.coinlayer.com/icons/ABC.png"
            },
            {
                "transferAddress": 3,
                "userName": "Snowden",
                "symbol": "ZEC",
                "rates": 0.005626,
                "name": "ZCash",
                "name_full": "ZCash (ZEC)",
                "max_supply": 21000000,
                "purchasedCoins": 97,
                "icon_url": "https://assets.coinlayer.com/icons/ZEC.png"
            },
            {
                "transferAddress": 4,
                "userName": "Michael",
                "symbol": "ACP",
                "rates": 0.014931,
                "name": "Anarchists Prime",
                "name_full": "Anarchists Prime (ACP)",
                "max_supply": 53760000,
                "purchasedCoins": 62,
                "icon_url": "https://assets.coinlayer.com/icons/ACP.png"
            }
        ]
    },
};

const selectUserReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload
            }
        default:
            return state;
        }
};

export default selectUserReducer;