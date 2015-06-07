/**
 * Implement repeating-key XOR
 * Here is the opening stanza of an important work of the English language.
 * Encrypt it, under the key "ICE", using repeating-key XOR.
 *
 * INPUT:
 *  Burning 'em, if you ain't quick and nimble
 *  I go crazy when I hear a cymbal
 *
 * EXPECTED:
 *  0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272
 *  a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f
 *
 * @url http://cryptopals.com/sets/1/challenges/4/
 */

var xorTools = require('../common/xor-tools.js');
var textConversion = require('../common/text-conversion.js');

var INPUT = "Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal";
var EXPECTED = "0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f";

var tmp = xorTools.xorTextAgainst(INPUT, 'ICE'),
    OUTPUT = textConversion.strToHex(tmp);

console.log(EXPECTED, '\n' + OUTPUT, '\n' + (OUTPUT == EXPECTED));
