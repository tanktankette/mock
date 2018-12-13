/**
 * @flow
 * @relayHash bdc47904606c9af7c1a5a1080e6a704b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CallersRoomsQueryVariables = {||};
export type CallersRoomsQueryResponse = {|
  +rooms: ?$ReadOnlyArray<?{|
    +id: ?string
  |}>
|};
*/


/*
query CallersRoomsQuery {
  rooms {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "rooms",
    "storageKey": null,
    "args": null,
    "concreteType": "Room",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CallersRoomsQuery",
  "id": null,
  "text": "query CallersRoomsQuery {\n  rooms {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CallersRoomsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "CallersRoomsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd560801ef50a50695d3c86936653f1be';
module.exports = node;
