
e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
s
a
n
i
t
i
z
e
H
t
m
l
(
h
t
m
l
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
h
t
m
l


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
s
c
r
i
p
t
\
b
[
^
<
]
*
(
?
:
(
?
!
<
\
/
s
c
r
i
p
t
>
)
<
[
^
<
]
*
)
*
<
\
/
s
c
r
i
p
t
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
\
s
+
o
n
\
w
+
\
s
*
=
\
s
*
(
?
:
"
[
^
"
]
*
"
|
'
[
^
'
]
*
'
|
[
^
\
s
>
]
+
)
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
\
s
*
(
?
:
h
r
e
f
|
s
r
c
)
\
s
*
=
\
s
*
(
?
:
"
j
a
v
a
s
c
r
i
p
t
:
[
^
"
]
*
"
|
'
j
a
v
a
s
c
r
i
p
t
:
[
^
'
]
*
'
)
/
g
i
,
 
"
 
h
r
e
f
=
'
#
'
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
\
s
*
s
t
y
l
e
\
s
*
=
\
s
*
(
?
:
"
[
^
"
]
*
"
|
'
[
^
'
]
*
'
)
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
\
s
*
c
l
a
s
s
\
s
*
=
\
s
*
(
?
:
"
[
^
"
]
*
"
|
'
[
^
'
]
*
'
)
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
i
f
r
a
m
e
\
b
[
^
>
]
*
>
[
\
s
\
S
]
*
?
<
\
/
i
f
r
a
m
e
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
e
m
b
e
d
\
b
[
^
>
]
*
>
[
\
s
\
S
]
*
?
<
\
/
e
m
b
e
d
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
o
b
j
e
c
t
\
b
[
^
>
]
*
>
[
\
s
\
S
]
*
?
<
\
/
o
b
j
e
c
t
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
s
v
g
\
b
[
^
>
]
*
o
n
l
o
a
d
\
s
*
=
[
^
>
]
*
>
[
\
s
\
S
]
*
?
<
\
/
s
v
g
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
i
m
g
\
b
[
^
>
]
*
o
n
e
r
r
o
r
\
s
*
=
[
^
>
]
*
\
/
?
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
i
m
g
[
^
>
]
*
s
r
c
\
s
*
=
\
s
*
[
"
'
]
[
^
"
'
]
*
i
n
d
i
a
b
i
x
[
^
"
'
]
*
[
"
'
]
[
^
>
]
*
\
/
?
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
i
m
g
[
^
>
]
*
s
r
c
\
s
*
=
\
s
*
[
"
'
]
\
/
[
^
"
'
]
*
[
"
'
]
[
^
>
]
*
\
/
?
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
V
i
d
e
o
\
s
*
E
x
p
l
a
n
a
t
i
o
n
[
\
s
\
S
]
*
?
(
?
=
<
\
/
d
i
v
>
|
$
)
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
a
\
b
[
^
>
]
*
(
?
:
y
o
u
t
u
b
e
|
y
o
u
t
u
\
.
b
e
|
v
i
d
e
o
)
[
^
>
]
*
>
[
\
s
\
S
]
*
?
<
\
/
a
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
(
d
i
v
|
s
p
a
n
|
p
|
f
o
n
t
)
\
s
*
>
\
s
*
<
\
/
\
1
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
\
/
?
f
o
n
t
[
^
>
]
*
>
/
g
i
,
 
"
"
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
<
i
m
g
\
b
[
^
>
]
*
\
/
?
>
/
g
i
,
 
"
"
)
;


}


