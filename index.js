'use strict';

var azartcore = module.exports;

// module information
azartcore.version = 'v' + require('./package.json').version;
azartcore.versionGuard = function(version) { return;
  if (version !== undefined) {
    var message = 'More than one instance of azartcore-lib found. ' +
      'Please make sure to require azartcore-lib and check that submodules do' +
      ' not also include their own azartcore-lib dependency.';
    throw new Error(message);
  }
};
azartcore.versionGuard(global._azartcore);
global._azartcore = azartcore.version;

// crypto
azartcore.crypto = {};
azartcore.crypto.BN = require('./lib/crypto/bn');
azartcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
azartcore.crypto.Hash = require('./lib/crypto/hash');
azartcore.crypto.Random = require('./lib/crypto/random');
azartcore.crypto.Point = require('./lib/crypto/point');
azartcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
azartcore.encoding = {};
azartcore.encoding.Base58 = require('./lib/encoding/base58');
azartcore.encoding.Base58Check = require('./lib/encoding/base58check');
azartcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
azartcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
azartcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
azartcore.util = {};
azartcore.util.buffer = require('./lib/util/buffer');
azartcore.util.js = require('./lib/util/js');
azartcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
azartcore.errors = require('./lib/errors');

// main azart library
azartcore.Address = require('./lib/address');
azartcore.Block = require('./lib/block');
azartcore.MerkleBlock = require('./lib/block/merkleblock');
azartcore.BlockHeader = require('./lib/block/blockheader');
azartcore.HDPrivateKey = require('./lib/hdprivatekey.js');
azartcore.HDPublicKey = require('./lib/hdpublickey.js');
azartcore.Networks = require('./lib/networks');
azartcore.Opcode = require('./lib/opcode');
azartcore.PrivateKey = require('./lib/privatekey');
azartcore.PublicKey = require('./lib/publickey');
azartcore.Script = require('./lib/script');
azartcore.Transaction = require('./lib/transaction');
azartcore.GovObject = require('./lib/govobject');
azartcore.URI = require('./lib/uri');
azartcore.Unit = require('./lib/unit');

// dependencies, subject to change
azartcore.deps = {};
azartcore.deps.bnjs = require('bn.js');
azartcore.deps.bs58 = require('bs58');
azartcore.deps.Buffer = Buffer;
azartcore.deps.elliptic = require('elliptic');
azartcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
azartcore.Transaction.sighash = require('./lib/transaction/sighash');
