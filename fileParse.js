var FileParse = /** @class */ (function () {
    function FileParse(fileName) {
        this.fileName = fileName;
    }
    FileParse.prototype.getExtension = function () {
        var lastDotIndex = this.fileName.lastIndexOf('.');
        var extension = this.fileName.slice(lastDotIndex);
        return extension;
    };
    FileParse.prototype.getFileSize = function () {
        // ファイルサイズ取得＆返す処理
        return 1;
    };
    return FileParse;
}());
// class CsvParse extends FileParse {
//   getCsvHeaderList(): stringList {}
// }
var filePath = '';
filePath = 'sampleData/sampleText1.txt';
var test = new FileParse(filePath);
console.log(test.getExtension());
console.log(test.getFileSize());
filePath = 'sampleData/sampleText1.csv';
// const testcsv = new CsvParse(filePath);
// console.log(test.getFileSize());
// console.log(test.getCsvHeaderList());
