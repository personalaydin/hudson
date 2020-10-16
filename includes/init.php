<?php

// @author Ozgur KARAGOZ
// @email ozgur@enustkat.com.tr

function includeFileWithVariables($fileName, $variables)
{
    extract($variables);
    include($fileName);
}
