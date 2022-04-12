<div class="container-fluid sfondo-main">
    <div class="container">

        <div class="row gap-3 justify-content-center padding">

            <?php
            foreach ($arrayAlbums as $album) { ?>

                <div class="col-5 col-sm-4 col-md-3 col-lg-2 text-center p_card sfondo_color">

                    <div class="immagine">
                        <img class="img" src="<?= $album['poster'] ?>" alt="<?= $album['title'] ?>" />
                    </div>
                    <h2 class="titolo text-white"><?= $album['title'] ?></h2>
                    <div class="grigio"><?= $album['author'] ?></div>
                    <div class="grigio"><?= $album['year'] ?></div>

                </div>

            <?php
            }
            ?>

        </div>

    </div>
</div>