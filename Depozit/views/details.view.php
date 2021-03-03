<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'components/header.php'; ?>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
</head>

<body>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

    <div class="container mt-5 text-center">
        <h1>Detalii despre produs:</h1>
        <hr>
        <br>
        <?php foreach ($date as $produs) : ?>
            <p data-aos="zoom-in-right"><b>Nume: </b><?= $produs['nume']; ?></p>
            <p data-aos="zoom-in-left" data-aos-delay="800"><b>Pret: </b><?= $produs['pret']; ?></p>
            <p  data-aos="zoom-in-right" data-aos-delay="1600"><b>Cantitate: </b><?= $produs['cantitate']; ?></p>
            <div  data-aos="fade-up" data-aos-delay="2400" data-aos-duration="3000">
            <img src="<?= $produs['imagine']; ?>" style="height: 500px;" />
            </div>
            <br>
        <?php endforeach; ?>
        <?php include 'components/footer.php'; ?>
    </div>


</body>

</html>