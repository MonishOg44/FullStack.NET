//task1
class Program
{
    static void Main()
    {
        int num = int.Parse(Console.ReadLine());

        if (num % 2 == 0)
            Console.WriteLine("Even");
        else
            Console.WriteLine("Odd");
    }
}

//task2

class Program
{
    static void Main()
    {
        double c = double.Parse(Console.ReadLine());
        double f = (c * 9 / 5) + 32;

        Console.WriteLine(f);
    }
}

//task3

class Program
{
    static void Main()
    {
        double f = double.Parse(Console.ReadLine());
        double c = (f - 32) * 5 / 9;

        Console.WriteLine(c);
    }
}