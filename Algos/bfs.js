function bFS (root, cb) {
  const queue = [root];


  while (queue.legnth)  {
    let current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right)  {
      queue.push(current.right)
    }
    cb(current);
  }

}



function dFS (root, cb) {
  if (root.right)  {
    return dFS(root.right)
  }
  if (root.left) {
    return dFS(root.left)
  }
  cb(root);
}