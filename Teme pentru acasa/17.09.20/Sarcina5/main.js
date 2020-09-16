let n = parseInt(prompt("Introduceti un numar: "));
let x, k;

putere(n);

alert(n + " = " + x + "^" + k);

function cmmdc(a, b){
    if(b==0) return a;
    else return cmmdc(b, a%b); 
}

function x_pow_n(x, n){
    if(n == 0) return 1;
    else return x * x_pow_n(x, n-1);
}

function putere(n){
    k = 0;
    d = 2;
    m = n;
    while(n > 1){
        if(n % d == 0){
            e = 0;
            while(n % d == 0) {
                e++;
                n = parseInt(n / d);
            }
            k = cmmdc(k, e);
        }
        else d++;
        if(n>1 && d*d>n){
            k = 1; break;
        }
    }

    d = 2;
    n = m;
    if(k == 1){
        x = n;
        return;
    }
    x = 1;
    while(n > 1){
        if(n % d == 0){
            e = 0;
            while(n % d == 0) {
                e++; n = parseInt(n /d);
            }
            x = x * x_pow_n(d, parseInt(e/k));
        }
        else d++;
    }
}