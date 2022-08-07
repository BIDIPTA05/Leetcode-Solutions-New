var levelOrder = function(root) {
    if(!root) return [];
    
    const Q  = [[root, 0]];
    const op = [];
    
    while(Q.length) {
        const [node, level] = Q.shift();
        
        if(op.length <= level) {
            op[level] = [];
        }
        op[level].push(node.val);
        
        for(const child of node.children) {
            Q.push([child, level + 1]);
        }
    }
    return op;
};
