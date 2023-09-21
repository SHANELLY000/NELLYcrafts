using System.Linq.Expressions;

namespace Calculadora_con_botones
{
    public partial class Form1 : Form
    {
        bool textonumero = true;
        string ejecutar;
        double num;
        double num2, total;
        public Form1()
        {
            InitializeComponent();
        }

        private void btnlimpiar_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "";
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "1";
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "2";
        }

        private void btn3_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "3";
        }

        private void btn4_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "4";
        }

        private void btn5_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "5";
        }

        private void btn6_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "6";
        }

        private void btn7_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "7";
        }

        private void btn8_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "8";
        }

        private void btn9_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "9";
        }

        private void btncero_Click(object sender, EventArgs e)
        {
            txtresultado.Text = "0";
        }

        private void btnsuma_Click(object sender, EventArgs e)
        {
            ejecutar = "+";
            textonumero = true;
            num = double.Parse(txtresultado.Text);
        }

        private void btnresta_Click(object sender, EventArgs e)
        {
            ejecutar = "-";
            textonumero = true;
            num = double.Parse(txtresultado.Text);
        }

        private void btnmultiplicacion_Click(object sender, EventArgs e)
        {
            ejecutar = "*";
            textonumero = true;
            num = double.Parse(txtresultado.Text);
        }

        private void btndivision_Click(object sender, EventArgs e)
        {
            ejecutar = "/";
            textonumero = true;
            num = double.Parse(txtresultado.Text);
        }

        private void btnresultado_Click(object sender, EventArgs e)
        {
            num2 = double.Parse(txtresultado.Text);
            textonumero= true;
            switch (ejecutar)
            {
                case "+":
                    total = num + num2;
                    txtresultado.Text = total.ToString();
                    break;

                case "-":
                    total = num - num2;
                    txtresultado.Text = total.ToString();
                    break;

                case "*":
                    total = num / num2;
                    txtresultado.Text = total.ToString();
                    break;

                    case "/":
                    total = num / num2;
                    txtresultado.Text = total.ToString();
                    break;
            }
        }

        private void txtresultado_TextChanged(object sender, EventArgs e)
        {

        }
    }
}