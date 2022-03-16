## 手写一个 new

```javascript
function _new(fn,...args) {
  let obj={};
  obj.__proto__=fn.prototype;
  fn.apply(obj, args)
  return obj;
}
```

## 手写一个 forEach

```javascript
Array.prototype._forEach=function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
```

## 手写一个 map

```javascript
Array.prototype._map=function (callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}
```

## 手写一个 filter

```javascript
Array.prototype._filter=function (callback) {
    let res=[];
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this) && res.push(this[i])
    }
    return res;
}
```

## 手写一个 every

```javascript
Array.prototype._every=function (callback) {
    let flag=true;
    for(let i=0;i<this.length;i++){
        flag = callback(this[i], i, this)
        if (!flag) break
    }
    return flag
}
```

## 手写一个 some

```javascript
Array.prototype._some=function (callback) {
    let flag=false;
    for(let i=0;i<this.length;i++){
        flag = callback(this[i], i, this)
        if (flag) break
    }
    return flag
}
```

## 手写一个 reduce

```javascript
Array.prototype._reduce=function (callback,...args) {
    let start=0,pre
    if(args.length){
        pre=args[0]
    }else{
        pre=this[0]
        start=1
    }
    for (let i = start; i < this.length; i++) {
        pre = callback(pre, this[i], i, this)
    }
    return pre
}
```

## 手写一个 findIndex

```javascript
Array.prototype._findIndex=function (callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return i
        }
    }
    return -1
}
```

## 手写一个 find

```javascript
Array.prototype._find=function (callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return this[i]
        }
    }
    return undefined
}
```

## 手写一个 fill

```javascript
Array.prototype._fill = function (value, start = 0, end) {
    end = end || this.length
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}
```
