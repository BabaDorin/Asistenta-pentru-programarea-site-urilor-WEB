<!DOCTYPE html>
<html lang="en">

<head>
  <?php include 'components/header.php'; ?>
</head>

<body>
  <!-- Modal -->
  <div class="modal fade mt-5 mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Inregistreaza un produs</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="insert.php" method="post" enctype="multipart/form-data">
            <br>
            <label>Nume:</label>
            <input type="text" class="form-control" name="nume">
            <label>Cantitate:</label>
            <input type="number" class="form-control" name="cantitate">
            <label>Pret:</label>
            <input type="number" class="form-control" name="pret">
            <br>
            <label>Imagine:</label>
            <input type="file" name="fileToUpload" id="fileToUpload">
            <input type="submit" value="Upload Image" name="submit">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
        </form>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="myContainer">
      <h1>Produsele din depozit:</h1>
      <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModal">+ Adauga un produs</button>
      <hr style="margin: 10px">
      <br>
      <div class="row">
        <?php if(count($listaProduse) == 0): ?>
          <h3 class="text-center text-muted">Nu exista produse inregistrate</h3>
        <?php endif; ?>
        <?php foreach ($listaProduse as $item) : ?>
          <div class="col-md-4">
            <div class="card" style="width: 18rem;">
              <img src="<?= $item['imagine']; ?>" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title"><?= $item['nume']; ?></h5>
                <p class="card-text">
                  <b>Pret: </b><?= $item['pret']; ?><br>
                  <b>Cantitate: </b><?= $item['cantitate']; ?><br>
                </p>
                <a href="details.php?id=<?= $item['id']; ?>" class="btn btn-primary">View</a>
                <a href="#" class="btn btn-danger">delete</a>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <?php include 'components/footer.php'; ?>
</body>

</html>