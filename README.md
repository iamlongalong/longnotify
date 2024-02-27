# monkey-longnotify

W(￣_￣)W  

🤯 I JUST WANT TO using notify simply 🤯


if you are in broswer, just using:  
> longnotify(level : "info" | "warn" | "alert" , message: str)

for example:
```js
longnotify("info", "📢 hello world info");
longnotify("warn", "🚸 hello world warn");
longnotify("alert", "🔥 hello world alert");
```

looking like this:
![using-case](asserts/longnotify-using-case.png)

😊 hope you enjoy it ~ 

## using in html

```html
<!-- 使用 jsdelivr 的 -->
<script src="https://cdn.jsdelivr.net/npm/longnotify/dist/index.js"></script>

<!-- 或者 unpkg 的-->
<script src="https://unpkg.com/longnotify@1.0.0/dist/index.js"></script>


<!-- 然后你就可以使用 -->
<script>
    longnotify("info", "📢 hello world info");
    longnotify("success", "✅ hello world success");
    longnotify("warn", "🚸 hello world warn");
    longnotify("warning", "🚸 hello world warning");
    longnotify("error", "❌ hello world error");
    longnotify("alert", "🔥 hello world alert");
</script>
```