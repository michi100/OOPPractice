type stringList = string[];

class FileParse {
  private readonly fileName: string;
  private readonly fileSize: number;
  constructor(fileName: string) {
    this.fileName = fileName;
  }
  getExtension(): string {
    const lastDotIndex = this.fileName.lastIndexOf('.');
    const extension: string = this.fileName.slice(lastDotIndex);
    return extension;
  }
  getFileSize(): number {
    // ファイルサイズ取得＆返す処理
    return 1;
  }
}

// class CsvParse extends FileParse {
//   getCsvHeaderList(): stringList {}
// }

let filePath = '';

filePath = 'sampleData/sampleText1.txt';
const test = new FileParse(filePath);
console.log(test.getExtension());
console.log(test.getFileSize());

filePath = 'sampleData/sampleText1.csv';
// const testcsv = new CsvParse(filePath);
// console.log(test.getFileSize());
// console.log(test.getCsvHeaderList());
