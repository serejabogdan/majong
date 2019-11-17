import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'majong';

    public arrayPrimeNumbers: number[] = [];

    public a = {
        value: 0,
        index: 0
    };
    public b = {
        value: 0,
        index: 0
    };
    public i: number = 0;

    static isSimpleNumber(n: number): boolean {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    ngOnInit(): void {
        const n = 99999;
        const start = 1;
        const end = 15;

        this.primeNumber(n, start, end);

        this.createArrayNumbers();
    }

    primeNumber(n: number, start: number, end: number): void {
        for (let i = 0; i <= n; i++) {
            if (AppComponent.isSimpleNumber(i)) {
                this.arrayPrimeNumbers.push(i);
                if (start < end) {
                    start++;
                } else {
                    break;
                }
            }
        }
    }

    createArrayNumbers(): void {
        const arr2 = this.arrayPrimeNumbers.slice();
        this.randomSort(this.arrayPrimeNumbers);
        this.randomSort(arr2);
        this.arrayPrimeNumbers.push(...arr2);
        console.log(arr2);
    }

    randomSort(arr: number[]): void {
        arr.sort(() => {
            return Math.random() - 0.5;
        });
    }

    start(item: number, index: number) {
        if (this.i === 0) {
            this.a.value = item;
            this.a.index = index;
            this.i++;
        } else if (this.i === 1 && (this.a.index !== index)) {
            this.b.value = item;
            this.end();
        }
    }

    end(): void {
        if (this.a.value === this.b.value) {
            console.log('true');
        } else {
            console.log('false');
        }
        this.i = 0;
    }
}
