// Вычислить сложность следующих алгоритмов


void test1(int n)
 {
    if (n==1) 
       return;
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            System.out.println("*");
            break;
}


void test2(int n)
 {
    if (n==1) 
       return;
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            System.out.println("*");
}


void test3(int n)
{
    int a = 0;
    for (i = 0; i < n; i++)
        for (j = n; j > i; j--)
        a = a + i + j;

}


void test4(int n)
{
    int i, j, a = 0;
    for (i = n/2; i <=n; i++)
        for (j = 2; j <=n; j=j*2)
        a=a+n/2;

}


// 2) Find the element that appears once in a sorted array
//     Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.


// Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.


// Задачки со звёздочкой - вычислить сложность в лучшем и худшем случае.
// 3) 
void test5(int n)
 {
    int a = 0, i = n;
    while (i > 0) {
        a += i;
        i /= 2;
}
}


void method(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
    }


void method2(int n) {
        for (int i = 0; i < n / 2; i++) {
            for (int j = 1; j + n / 2 <= n; j++) {
                for (int k = 1; k <= n; k = k * 2) {
                    System.out.println("I am expert!");
                }
            }
        }
    }


void method3(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j = j + i) {
                System.out.println("I am expert!");
            }
        }
    }


// Временная сложность тестов test1 и test2 равна O(n^2), потому что они оба имеют два вложенных цикла, каждый из которых выполняется n раз.
// Временная сложность алгоритма поиска элемента, который появляется один раз в отсортированном массиве, составляет O(n), потому что он выполняет итерацию по массиву один раз и проверяет каждый элемент.
// Временная сложность test5 равна O(log n), потому что цикл while выполняется log n раз.
// Временная сложность метода составляет O(log n), потому что цикл while выполняет не более log n итераций, чтобы достичь gcd.
// Временная сложность метода2 равна O(n log n), поскольку внешний цикл выполняется n/2 раза, средний цикл выполняется n раз, а внутренний цикл выполняется log n раз.
// Временная сложность метода3 равна O(n^2), поскольку внешний цикл выполняется n раз, а внутренний цикл выполняется n/i раз, где i — текущая итерация внешнего цикла.
