
i
m
p
o
r
t
 
t
y
p
e
 
{
 
Q
u
e
r
y
R
e
s
u
l
t
 
}
 
f
r
o
m
 
"
.
/
s
q
l
-
e
n
g
i
n
e
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
V
a
l
i
d
a
t
i
o
n
R
e
s
u
l
t
 
{


 
 
c
o
r
r
e
c
t
:
 
b
o
o
l
e
a
n
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
n
u
m
b
e
r
;


}




/
*
*


 
*
 
C
o
m
p
a
r
e
 
u
s
e
r
 
q
u
e
r
y
 
o
u
t
p
u
t
 
w
i
t
h
 
e
x
p
e
c
t
e
d
 
o
u
t
p
u
t
.


 
*
 
-
 
C
o
m
p
a
r
e
s
 
c
o
l
u
m
n
s
 
(
c
a
s
e
-
i
n
s
e
n
s
i
t
i
v
e
)


 
*
 
-
 
C
o
m
p
a
r
e
s
 
r
o
w
s
 
(
o
r
d
e
r
-
i
n
d
e
p
e
n
d
e
n
t
 
b
y
 
d
e
f
a
u
l
t
,
 
o
r
d
e
r
-
d
e
p
e
n
d
e
n
t
 
i
f
 
o
r
d
e
r
e
d
)


 
*
/


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
 
v
a
l
i
d
a
t
e
R
e
s
u
l
t
(


 
 
u
s
e
r
R
e
s
u
l
t
:
 
Q
u
e
r
y
R
e
s
u
l
t
,


 
 
e
x
p
e
c
t
e
d
:
 
{
 
c
o
l
u
m
n
s
:
 
s
t
r
i
n
g
[
]
;
 
r
o
w
s
:
 
(
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
 
}
,


 
 
o
r
d
e
r
M
a
t
t
e
r
s
 
=
 
f
a
l
s
e


)
:
 
V
a
l
i
d
a
t
i
o
n
R
e
s
u
l
t
 
{


 
 
i
f
 
(
u
s
e
r
R
e
s
u
l
t
.
e
r
r
o
r
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
f
a
l
s
e
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
Q
L
 
E
r
r
o
r
:
 
$
{
u
s
e
r
R
e
s
u
l
t
.
e
r
r
o
r
}
`
,


 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
0
,


 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}




 
 
/
/
 
C
h
e
c
k
 
c
o
l
u
m
n
 
c
o
u
n
t


 
 
i
f
 
(
u
s
e
r
R
e
s
u
l
t
.
c
o
l
u
m
n
s
.
l
e
n
g
t
h
 
!
=
=
 
e
x
p
e
c
t
e
d
.
c
o
l
u
m
n
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
f
a
l
s
e
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
E
x
p
e
c
t
e
d
 
$
{
e
x
p
e
c
t
e
d
.
c
o
l
u
m
n
s
.
l
e
n
g
t
h
}
 
c
o
l
u
m
n
s
 
b
u
t
 
g
o
t
 
$
{
u
s
e
r
R
e
s
u
l
t
.
c
o
l
u
m
n
s
.
l
e
n
g
t
h
}
`
,


 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
0
,


 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}




 
 
/
/
 
C
h
e
c
k
 
c
o
l
u
m
n
 
n
a
m
e
s
 
(
c
a
s
e
-
i
n
s
e
n
s
i
t
i
v
e
)


 
 
c
o
n
s
t
 
c
o
l
M
a
t
c
h
 
=
 
u
s
e
r
R
e
s
u
l
t
.
c
o
l
u
m
n
s
.
e
v
e
r
y
(


 
 
 
 
(
c
,
 
i
)
 
=
>
 
c
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
e
x
p
e
c
t
e
d
.
c
o
l
u
m
n
s
[
i
]
.
t
o
L
o
w
e
r
C
a
s
e
(
)


 
 
)
;


 
 
i
f
 
(
!
c
o
l
M
a
t
c
h
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
f
a
l
s
e
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
l
u
m
n
 
m
i
s
m
a
t
c
h
.
 
E
x
p
e
c
t
e
d
:
 
$
{
e
x
p
e
c
t
e
d
.
c
o
l
u
m
n
s
.
j
o
i
n
(
"
,
 
"
)
}
.
 
G
o
t
:
 
$
{
u
s
e
r
R
e
s
u
l
t
.
c
o
l
u
m
n
s
.
j
o
i
n
(
"
,
 
"
)
}
`
,


 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
0
,


 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}




 
 
/
/
 
C
h
e
c
k
 
r
o
w
 
c
o
u
n
t


 
 
i
f
 
(
u
s
e
r
R
e
s
u
l
t
.
r
o
w
s
.
l
e
n
g
t
h
 
!
=
=
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
f
a
l
s
e
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
E
x
p
e
c
t
e
d
 
$
{
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
}
 
r
o
w
s
 
b
u
t
 
g
o
t
 
$
{
u
s
e
r
R
e
s
u
l
t
.
r
o
w
s
.
l
e
n
g
t
h
}
`
,


 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
0
,


 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}




 
 
/
/
 
C
o
m
p
a
r
e
 
r
o
w
s


 
 
c
o
n
s
t
 
n
o
r
m
a
l
i
z
e
 
=
 
(
v
:
 
u
n
k
n
o
w
n
)
:
 
s
t
r
i
n
g
 
=
>


 
 
 
 
v
 
=
=
=
 
n
u
l
l
 
|
|
 
v
 
=
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
"
N
U
L
L
"
 
:
 
S
t
r
i
n
g
(
v
)
.
t
r
i
m
(
)
;




 
 
i
f
 
(
o
r
d
e
r
M
a
t
t
e
r
s
)
 
{


 
 
 
 
l
e
t
 
m
a
t
c
h
e
d
 
=
 
0
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
x
p
R
o
w
 
=
 
e
x
p
e
c
t
e
d
.
r
o
w
s
[
i
]
.
m
a
p
(
n
o
r
m
a
l
i
z
e
)
;


 
 
 
 
 
 
c
o
n
s
t
 
u
s
r
R
o
w
 
=
 
u
s
e
r
R
e
s
u
l
t
.
r
o
w
s
[
i
]
.
m
a
p
(
n
o
r
m
a
l
i
z
e
)
;


 
 
 
 
 
 
i
f
 
(
e
x
p
R
o
w
.
e
v
e
r
y
(
(
v
,
 
j
)
 
=
>
 
v
 
=
=
=
 
u
s
r
R
o
w
[
j
]
)
)
 
m
a
t
c
h
e
d
+
+
;


 
 
 
 
}


 
 
 
 
i
f
 
(
m
a
t
c
h
e
d
 
=
=
=
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
r
r
e
c
t
!
 
$
{
m
a
t
c
h
e
d
}
 
r
o
w
s
 
m
a
t
c
h
.
`
,


 
 
 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
m
a
t
c
h
e
d
,


 
 
 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
 
 
}
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
f
a
l
s
e
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
o
w
 
v
a
l
u
e
s
 
o
r
 
o
r
d
e
r
 
m
i
s
m
a
t
c
h
.
 
$
{
m
a
t
c
h
e
d
}
/
$
{
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
}
 
r
o
w
s
 
c
o
r
r
e
c
t
.
`
,


 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
m
a
t
c
h
e
d
,


 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}




 
 
/
/
 
O
r
d
e
r
-
i
n
d
e
p
e
n
d
e
n
t
 
c
o
m
p
a
r
i
s
o
n


 
 
c
o
n
s
t
 
r
o
w
T
o
K
e
y
 
=
 
(
r
o
w
:
 
(
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
)
 
=
>


 
 
 
 
r
o
w
.
m
a
p
(
n
o
r
m
a
l
i
z
e
)
.
j
o
i
n
(
"
|
|
|
"
)
;




 
 
c
o
n
s
t
 
e
x
p
e
c
t
e
d
S
e
t
 
=
 
n
e
w
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
(
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
r
o
w
 
o
f
 
e
x
p
e
c
t
e
d
.
r
o
w
s
)
 
{


 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
r
o
w
T
o
K
e
y
(
r
o
w
)
;


 
 
 
 
e
x
p
e
c
t
e
d
S
e
t
.
s
e
t
(
k
e
y
,
 
(
e
x
p
e
c
t
e
d
S
e
t
.
g
e
t
(
k
e
y
)
 
|
|
 
0
)
 
+
 
1
)
;


 
 
}




 
 
l
e
t
 
m
a
t
c
h
e
d
 
=
 
0
;


 
 
f
o
r
 
(
c
o
n
s
t
 
r
o
w
 
o
f
 
u
s
e
r
R
e
s
u
l
t
.
r
o
w
s
)
 
{


 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
r
o
w
T
o
K
e
y
(
r
o
w
)
;


 
 
 
 
c
o
n
s
t
 
c
o
u
n
t
 
=
 
e
x
p
e
c
t
e
d
S
e
t
.
g
e
t
(
k
e
y
)
;


 
 
 
 
i
f
 
(
c
o
u
n
t
 
&
&
 
c
o
u
n
t
 
>
 
0
)
 
{


 
 
 
 
 
 
m
a
t
c
h
e
d
+
+
;


 
 
 
 
 
 
e
x
p
e
c
t
e
d
S
e
t
.
s
e
t
(
k
e
y
,
 
c
o
u
n
t
 
-
 
1
)
;


 
 
 
 
}


 
 
}




 
 
i
f
 
(
m
a
t
c
h
e
d
 
=
=
=
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
o
r
r
e
c
t
:
 
t
r
u
e
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
r
r
e
c
t
!
 
A
l
l
 
$
{
m
a
t
c
h
e
d
}
 
r
o
w
s
 
m
a
t
c
h
.
`
,


 
 
 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
m
a
t
c
h
e
d
,


 
 
 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}




 
 
r
e
t
u
r
n
 
{


 
 
 
 
c
o
r
r
e
c
t
:
 
f
a
l
s
e
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
m
a
t
c
h
e
d
}
/
$
{
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
}
 
r
o
w
s
 
m
a
t
c
h
.
 
C
h
e
c
k
 
y
o
u
r
 
q
u
e
r
y
.
`
,


 
 
 
 
m
a
t
c
h
e
d
R
o
w
s
:
 
m
a
t
c
h
e
d
,


 
 
 
 
t
o
t
a
l
E
x
p
e
c
t
e
d
:
 
e
x
p
e
c
t
e
d
.
r
o
w
s
.
l
e
n
g
t
h
,


 
 
}
;


}


