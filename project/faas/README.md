# Faas notes

To retrieve the admin password run:

```bash
$ echo $(kubectl -n openfaas get secret basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode)
```
