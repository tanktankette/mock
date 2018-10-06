/**
 * @flow
 * @relayHash c23400c682aba06d3b86a3b3e9edf80e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RoomMenuRoomsQueryVariables = {||};
export type RoomMenuRoomsQueryResponse = {|
  +rooms: ?$ReadOnlyArray<?{|
    +id: ?string,
    +sid: ?string,
    +users: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |}>
|};
*/


/*
query RoomMenuRoomsQuery {
  rooms {
    id
    sid
    users {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sid",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RoomMenuRoomsQuery",
  "id": null,
  "text": "query RoomMenuRoomsQuery {\n  rooms {\n    id\n    sid\n    users {\n      name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RoomMenuRoomsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rooms",
        "storageKey": null,
        "args": null,
        "concreteType": "Room",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RoomMenuRoomsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rooms",
        "storageKey": null,
        "args": null,
        "concreteType": "Room",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              v2,
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb42b30af932c442a11d8e46a3f3c38a';
module.exports = node;
