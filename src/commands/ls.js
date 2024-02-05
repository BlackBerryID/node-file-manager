import { readdir } from "fs/promises"

export const ls = async (currentPath) => {
  const content = await readdir(currentPath, { withFileTypes: true })

  const mappedContent = content.filter(item => item.isDirectory() || item.isFile())
                        .map(item => ({
                          Name: item.name,
                          Type: item.isDirectory() ? 'directory' : 'file'
                        }))

  const directoryOjbects = mappedContent.filter(item => item.Type === 'directory')
                                        .toSorted((a, b) => {
                                          if (a.Name === b.Name) return 0;
                                      
                                          return a.Name > b.Name ? 1 : -1;
                                        })

  const fileOjbects = mappedContent.filter(item => item.Type === 'file')
                                   .toSorted((a, b) => {
                                     if (a.Name === b.Name) return 0;
                                 
                                     return a.Name > b.Name ? 1 : -1;
                                   })
  
  const result = [...directoryOjbects, ...fileOjbects]
                        
  console.table(result)
}