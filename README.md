# Bun Kurulumu

Linux sisteminde bun kullanabilmek için aşağıdaki 2 komutu deneyin.

```
# Script'i yüklemek için bu komutu deneyin
curl -fsSL https://bun.sh/install | bash
```

```
# npm ile bu şekilde yüklemek package.json içinde
# kullanabilmek için daha çok işinize yarayacaktır
npm install -g bun
```

NPM ile yüklemişseniz ve <code>bun --version</code> yazdığınızda versiyon numarası görünüyorsa bun yüklenmiş demektir. Package.json dosyasını örnekteki gibi oluşturabilirsiniz.

Package.json bu şekilde yapılandırılmışsa <code>npm run dev</code> diyerek uygulamanızı çalıştırabilirsiniz. (Bu komut Bun'ın run komutunu çalıştırır)

Build almak için <code>npm run build</code> komutunu kullanabilirsiniz. Bu npm yerine bun'ın build komutunu çalıştıracaktır.

Daha fazla bilgi için [https://bun.sh/](Bun.sh)