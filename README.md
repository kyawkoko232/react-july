- App jsx ကနေ Book List ကို props တွေပေးလိုက်တယ်။ 
- Book Create ကို createBook ဆိုပြီး props ပေးထား။
```javascript
  <div className="app font-poppins ">
  <BookList books={books} onDelete={deleteBookById} />
  <BookCreate  onCreate={createBook} />
  </div>
```

