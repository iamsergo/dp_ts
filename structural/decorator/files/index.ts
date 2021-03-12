import FileWithCompress from "./FileWithCompress"
import FileWithEncrypt from "./FileWithEncrypt"
import IFile from "./IFile"
import PlainFile from "./PlainFile"

const f : IFile =
  new FileWithEncrypt(
    new FileWithCompress(
      new PlainFile('0.txt')
    )
  )

f.write('abcdef')

console.log(f.read())