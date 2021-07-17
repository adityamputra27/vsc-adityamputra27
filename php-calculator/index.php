<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Calculator</title>
</head>
<body>
    <div class="container">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
            <input type="text" name="inp_satu" required>
            <select name="operator" readonly>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="x">x</option>
            </select>
            <input type="text" name="inp_dua" required>
            <button type="submit" name="calculate">Calculate</button>
        </form>
    </div>
    <?php
        if (isset($_POST['calculate'])) {
            $inp_satu = $_POST['inp_satu'];
            $operator = $_POST['operator'];
            $inp_dua = $_POST['inp_dua'];
            
            if (!empty($inp_satu) && !empty($inp_dua)) {
                if ($operator == '+') {
                    $result = $inp_satu + $inp_dua;
                } else if ($operator == '-') {
                    $result = $inp_satu - $inp_dua;
                } else if ($operator == '/') {
                    $result = $inp_satu / $inp_dua;
                } else if ($operator == 'x') {
                    $result = $inp_satu * $inp_dua;
                }
    
                echo 'The result is: '.$result;
            }
        }
    ?>
</body>
</html>