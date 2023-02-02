import * as fflate from 'fflate';

const enc = new TextEncoder(), dec = new TextDecoder();
const buf = enc.encode('Hello world!');
 

const compressedDataToString = data => {
    let result = '';
    for (let value of data) {
      result += String.fromCharCode(data);
    }
    return result;
  }

  const stringToCompressedData = str => {
    let result = new Uint8Array(str.length);

    for (let i = 0; i < str.length; ++i){
        result[i] = str.charCodeAt(i);
    }

    return result;
  }

  const compressedString = compressedDataToString(fflate.compress(buf));
  console.log(compressedString);
  const decompressed = fflate.decompress(stringToCompressedData(compressedString));
  console.log(decompressed);