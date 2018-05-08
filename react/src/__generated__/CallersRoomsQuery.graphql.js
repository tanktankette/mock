/**
 * @flow
 * @relayHash 8e6b593c1242b75f132f0569dc9d94a5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CallersRoomsQueryVariables = {||};
export type CallersRoomsQueryResponse = {|
  +rooms: ?$ReadOnlyArray<?{|
    +description: ?string
  |}>
|};
*/


/*
query CallersRoomsQuery {
  rooms {
    description
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
        "name": "description",
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
  "text": "query CallersRoomsQuery {\n  rooms {\n    description\n  }\n}\n",
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
(node/*: any*/).hash = 'ecadc1aa696f4f5895d50aff82a9a0fd';
module.exports = node;
