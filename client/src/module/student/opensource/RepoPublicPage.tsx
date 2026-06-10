
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
P
a
r
a
m
s
,
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{


 
 
S
t
a
r
,


 
 
G
i
t
F
o
r
k
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
,


 
 
T
a
g
,


 
 
A
l
e
r
t
C
i
r
c
l
e
,


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


 
 
G
i
t
h
u
b
,


 
 
C
o
d
e
2
,


 
 
B
o
o
k
O
p
e
n
,


 
 
A
c
t
i
v
i
t
y
,


 
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
f
o
r
m
a
t
D
i
s
t
a
n
c
e
T
o
N
o
w
 
}
 
f
r
o
m
 
"
d
a
t
e
-
f
n
s
"
;




i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


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
 
O
p
e
n
S
o
u
r
c
e
R
e
p
o
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
F
o
o
t
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
F
o
o
t
e
r
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;


i
m
p
o
r
t
 
{
 
L
o
a
d
i
n
g
S
c
r
e
e
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
L
o
a
d
i
n
g
S
c
r
e
e
n
"
;


i
m
p
o
r
t
 
{
 
d
i
f
f
i
c
u
l
t
y
B
a
d
g
e
 
}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
r
e
p
o
-
u
t
i
l
s
"
;




i
n
t
e
r
f
a
c
e
 
G
i
t
h
u
b
I
s
s
u
e
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
h
t
m
l
_
u
r
l
:
 
s
t
r
i
n
g
;


 
 
n
u
m
b
e
r
:
 
n
u
m
b
e
r
;


 
 
c
r
e
a
t
e
d
_
a
t
:
 
s
t
r
i
n
g
;


 
 
l
a
b
e
l
s
:
 
{
 
n
a
m
e
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
u
s
e
r
:
 
{
 
l
o
g
i
n
:
 
s
t
r
i
n
g
;
 
a
v
a
t
a
r
_
u
r
l
:
 
s
t
r
i
n
g
 
}
;


}




f
u
n
c
t
i
o
n
 
r
e
p
o
P
a
g
e
P
a
t
h
(
o
w
n
e
r
:
 
s
t
r
i
n
g
,
 
n
a
m
e
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
 
`
/
o
p
e
n
s
o
u
r
c
e
/
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
o
w
n
e
r
)
}
/
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
n
a
m
e
)
}
`
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
S
t
r
u
c
t
u
r
e
d
D
a
t
a
(
r
e
p
o
:
 
O
p
e
n
S
o
u
r
c
e
R
e
p
o
)
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
"
@
c
o
n
t
e
x
t
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
"
,


 
 
 
 
"
@
t
y
p
e
"
:
 
"
S
o
f
t
w
a
r
e
S
o
u
r
c
e
C
o
d
e
"
,


 
 
 
 
"
n
a
m
e
"
:
 
r
e
p
o
.
n
a
m
e
,


 
 
 
 
"
d
e
s
c
r
i
p
t
i
o
n
"
:
 
r
e
p
o
.
d
e
s
c
r
i
p
t
i
o
n
,


 
 
 
 
"
c
o
d
e
R
e
p
o
s
i
t
o
r
y
"
:
 
r
e
p
o
.
u
r
l
,


 
 
 
 
"
p
r
o
g
r
a
m
m
i
n
g
L
a
n
g
u
a
g
e
"
:
 
r
e
p
o
.
l
a
n
g
u
a
g
e
,


 
 
 
 
"
r
u
n
t
i
m
e
P
l
a
t
f
o
r
m
"
:
 
r
e
p
o
.
d
o
m
a
i
n


 
 
}
;


}




c
o
n
s
t
 
C
O
N
T
R
I
B
U
T
I
O
N
_
S
T
E
P
S
 
=
 
[


 
 
{


 
 
 
 
s
t
e
p
:
 
"
0
1
"
,


 
 
 
 
t
i
t
l
e
:
 
"
F
o
r
k
 
&
 
C
l
o
n
e
"
,


 
 
 
 
d
e
s
c
:
 
"
C
r
e
a
t
e
 
y
o
u
r
 
o
w
n
 
c
o
p
y
 
o
f
 
t
h
e
 
r
e
p
o
s
i
t
o
r
y
 
a
n
d
 
c
l
o
n
e
 
i
t
 
l
o
c
a
l
l
y
 
t
o
 
s
t
a
r
t
 
w
o
r
k
i
n
g
.
"
,


 
 
}
,


 
 
{


 
 
 
 
s
t
e
p
:
 
"
0
2
"
,


 
 
 
 
t
i
t
l
e
:
 
"
F
i
n
d
 
a
n
 
I
s
s
u
e
"
,


 
 
 
 
d
e
s
c
:
 
"
L
o
o
k
 
f
o
r
 
i
s
s
u
e
s
 
l
a
b
e
l
e
d
 
'
g
o
o
d
 
f
i
r
s
t
 
i
s
s
u
e
'
 
o
r
 
'
b
e
g
i
n
n
e
r
'
 
t
h
a
t
 
m
a
t
c
h
 
y
o
u
r
 
s
k
i
l
l
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
s
t
e
p
:
 
"
0
3
"
,


 
 
 
 
t
i
t
l
e
:
 
"
O
p
e
n
 
a
 
P
R
"
,


 
 
 
 
d
e
s
c
:
 
"
S
u
b
m
i
t
 
y
o
u
r
 
c
h
a
n
g
e
s
 
a
s
 
a
 
P
u
l
l
 
R
e
q
u
e
s
t
 
a
n
d
 
w
o
r
k
 
w
i
t
h
 
m
a
i
n
t
a
i
n
e
r
s
 
t
o
 
g
e
t
 
i
t
 
m
e
r
g
e
d
.
"
,


 
 
}
,


]
 
a
s
 
c
o
n
s
t
;




c
o
n
s
t
 
I
N
T
E
R
N
H
A
C
K
_
R
E
S
O
U
R
C
E
S
 
=
 
[


 
 
{
 
l
a
b
e
l
:
 
"
O
p
e
n
 
S
o
u
r
c
e
 
H
u
b
"
,
 
t
o
:
 
"
/
o
p
e
n
s
o
u
r
c
e
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
Y
o
u
r
 
F
i
r
s
t
 
C
o
n
t
r
i
b
u
t
i
o
n
"
,
 
t
o
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
G
i
t
 
f
o
r
 
O
p
e
n
 
S
o
u
r
c
e
"
,
 
t
o
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
i
t
-
g
u
i
d
e
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
R
e
a
d
 
a
 
C
o
d
e
b
a
s
e
"
,
 
t
o
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
r
e
a
d
-
c
o
d
e
b
a
s
e
"
 
}
,


]
 
a
s
 
c
o
n
s
t
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
R
e
p
o
P
u
b
l
i
c
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
o
w
n
e
r
,
 
n
a
m
e
 
}
 
=
 
u
s
e
P
a
r
a
m
s
<
{
 
o
w
n
e
r
:
 
s
t
r
i
n
g
;
 
n
a
m
e
:
 
s
t
r
i
n
g
 
}
>
(
)
;


 
 
c
o
n
s
t
 
[
r
e
p
o
,
 
s
e
t
R
e
p
o
]
 
=
 
u
s
e
S
t
a
t
e
<
O
p
e
n
S
o
u
r
c
e
R
e
p
o
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
i
s
s
u
e
s
,
 
s
e
t
I
s
s
u
e
s
]
 
=
 
u
s
e
S
t
a
t
e
<
G
i
t
h
u
b
I
s
s
u
e
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
I
s
s
u
e
s
,
 
s
e
t
L
o
a
d
i
n
g
I
s
s
u
e
s
]
 
=
 
u
s
e
S
t
a
t
e
(
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
o
w
n
e
r
 
|
|
 
!
n
a
m
e
)
 
r
e
t
u
r
n
;




 
 
 
 
l
e
t
 
c
a
n
c
e
l
l
e
d
 
=
 
f
a
l
s
e
;




 
 
 
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
f
e
t
c
h
D
a
t
a
(
)
 
{


 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
n
u
l
l
)
;




 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
p
o
n
s
e
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
`
/
o
p
e
n
s
o
u
r
c
e
/
$
{
o
w
n
e
r
}
/
$
{
n
a
m
e
}
`
)
;


 
 
 
 
 
 
 
 
i
f
 
(
c
a
n
c
e
l
l
e
d
)
 
r
e
t
u
r
n
;




 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
p
o
D
a
t
a
 
=
 
r
e
s
p
o
n
s
e
.
d
a
t
a
.
r
e
p
o
 
a
s
 
O
p
e
n
S
o
u
r
c
e
R
e
p
o
;


 
 
 
 
 
 
 
 
s
e
t
R
e
p
o
(
r
e
p
o
D
a
t
a
)
;


 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;




 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
I
s
s
u
e
s
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
s
u
e
s
R
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
`
/
o
p
e
n
s
o
u
r
c
e
/
$
{
o
w
n
e
r
}
/
$
{
n
a
m
e
}
/
i
s
s
u
e
s
`
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
c
e
l
l
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
s
s
u
e
s
(
i
s
s
u
e
s
R
e
s
.
d
a
t
a
.
i
s
s
u
e
s
 
?
?
 
[
]
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
c
e
l
l
e
d
)
 
s
e
t
I
s
s
u
e
s
(
[
]
)
;


 
 
 
 
 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
c
a
n
c
e
l
l
e
d
)
 
s
e
t
L
o
a
d
i
n
g
I
s
s
u
e
s
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
c
a
n
c
e
l
l
e
d
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
e
s
s
a
g
e
 
=


 
 
 
 
 
 
 
 
 
 
(
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
)
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
?
?


 
 
 
 
 
 
 
 
 
 
"
R
e
p
o
s
i
t
o
r
y
 
n
o
t
 
f
o
u
n
d
"
;


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
m
e
s
s
a
g
e
)
;


 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
I
s
s
u
e
s
(
f
a
l
s
e
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
f
e
t
c
h
D
a
t
a
(
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
a
n
c
e
l
l
e
d
 
=
 
t
r
u
e
;


 
 
 
 
}
;


 
 
}
,
 
[
o
w
n
e
r
,
 
n
a
m
e
]
)
;




 
 
i
f
 
(
l
o
a
d
i
n
g
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
[
#
f
a
f
a
f
a
]
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>


 
 
 
 
 
 
 
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>


 
 
 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
e
r
r
o
r
 
|
|
 
!
r
e
p
o
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
[
#
f
a
f
a
f
a
]
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
4
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
y
-
2
4
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
-
4
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
1
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
2
 
h
-
1
2
 
t
e
x
t
-
r
e
d
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
4
"
>
R
e
p
o
 
N
o
t
 
F
o
u
n
d
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
|
|
 
"
T
h
e
 
r
e
p
o
s
i
t
o
r
y
 
y
o
u
'
r
e
 
l
o
o
k
i
n
g
 
f
o
r
 
d
o
e
s
n
'
t
 
e
x
i
s
t
 
i
n
 
o
u
r
 
c
a
t
a
l
o
g
.
"
}


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
o
p
e
n
s
o
u
r
c
e
"
>
B
r
o
w
s
e
 
C
o
l
l
e
c
t
i
o
n
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
b
a
d
g
e
 
=
 
d
i
f
f
i
c
u
l
t
y
B
a
d
g
e
(
r
e
p
o
.
d
i
f
f
i
c
u
l
t
y
)
;


 
 
c
o
n
s
t
 
p
a
g
e
C
a
n
o
n
i
c
a
l
 
=
 
c
a
n
o
n
i
c
a
l
U
r
l
(
r
e
p
o
P
a
g
e
P
a
t
h
(
r
e
p
o
.
o
w
n
e
r
,
 
r
e
p
o
.
n
a
m
e
)
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
[
#
f
a
f
a
f
a
]
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
s
e
l
e
c
t
i
o
n
:
b
g
-
p
r
i
m
a
r
y
/
1
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
$
{
r
e
p
o
.
n
a
m
e
}
 
—
 
G
o
o
d
 
F
i
r
s
t
 
I
s
s
u
e
s
,
 
B
e
g
i
n
n
e
r
 
G
u
i
d
e
`
}


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
{
`
C
o
n
t
r
i
b
u
t
e
 
t
o
 
$
{
r
e
p
o
.
n
a
m
e
}
 
b
y
 
$
{
r
e
p
o
.
o
w
n
e
r
}
.
 
E
x
p
l
o
r
e
 
$
{
r
e
p
o
.
l
a
n
g
u
a
g
e
}
 
g
o
o
d
 
f
i
r
s
t
 
i
s
s
u
e
s
,
 
d
i
f
f
i
c
u
l
t
y
 
r
a
t
i
n
g
 
$
{
b
a
d
g
e
.
l
a
b
e
l
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
}
,
 
a
n
d
 
a
 
3
-
s
t
e
p
 
c
o
n
t
r
i
b
u
t
i
o
n
 
g
u
i
d
e
 
f
o
r
 
b
e
g
i
n
n
e
r
s
.
`
}


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
p
a
g
e
C
a
n
o
n
i
c
a
l
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
b
u
i
l
d
S
t
r
u
c
t
u
r
e
d
D
a
t
a
(
r
e
p
o
)
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>




 
 
 
 
 
 
<
m
a
i
n
 
c
l
a
s
s
N
a
m
e
=
"
p
t
-
2
4
 
p
b
-
1
6
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
n
a
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
s
p
a
c
e
-
x
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
o
p
e
n
s
o
u
r
c
e
"
 
c
l
a
s
s
N
a
m
e
=
"
h
o
v
e
r
:
t
e
x
t
-
p
r
i
m
a
r
y
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
e
n
 
S
o
u
r
c
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
t
e
x
t
-
x
s
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
5
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
d
o
m
a
i
n
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
n
a
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
l
g
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
l
g
:
c
o
l
-
s
p
a
n
-
2
 
s
p
a
c
e
-
y
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
m
e
d
i
u
m
"
>
{
r
e
p
o
.
o
w
n
e
r
}
 
/
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
4
x
l
 
f
o
n
t
-
e
x
t
r
a
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
a
x
-
w
-
2
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
l
o
g
o
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
r
e
p
o
.
l
o
g
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
r
e
p
o
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
h
-
1
6
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
-
2
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
6
 
m
t
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
r
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
f
i
l
l
-
a
m
b
e
r
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
l
g
"
>
{
r
e
p
o
.
s
t
a
r
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
f
o
n
t
-
m
e
d
i
u
m
"
>
S
t
a
r
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
F
o
r
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
l
g
"
>
{
r
e
p
o
.
f
o
r
k
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
f
o
n
t
-
m
e
d
i
u
m
"
>
F
o
r
k
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
6
 
w
-
p
x
 
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
h
i
d
d
e
n
 
s
m
:
b
l
o
c
k
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
1
 
b
g
-
p
r
i
m
a
r
y
/
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
p
r
i
m
a
r
y
/
1
0
 
r
o
u
n
d
e
d
-
l
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
p
r
i
m
a
r
y
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
p
r
i
m
a
r
y
"
>
{
r
e
p
o
.
l
a
n
g
u
a
g
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
s
h
a
d
o
w
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
6
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
/
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
S
q
u
a
r
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
p
r
i
m
a
r
y
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
G
o
o
d
 
F
i
r
s
t
 
I
s
s
u
e
s
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
`
$
{
r
e
p
o
.
u
r
l
}
/
i
s
s
u
e
s
?
q
=
i
s
%
3
A
o
p
e
n
+
i
s
%
3
A
i
s
s
u
e
+
l
a
b
e
l
%
3
A
%
2
2
g
o
o
d
+
f
i
r
s
t
+
i
s
s
u
e
%
2
2
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
p
r
i
m
a
r
y
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
a
l
l
 
o
n
 
G
i
t
H
u
b
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
d
i
v
i
d
e
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
I
s
s
u
e
s
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
1
2
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
n
i
m
a
t
e
-
s
p
i
n
 
r
o
u
n
d
e
d
-
f
u
l
l
 
h
-
8
 
w
-
8
 
b
o
r
d
e
r
-
t
-
2
 
b
o
r
d
e
r
-
p
r
i
m
a
r
y
 
m
x
-
a
u
t
o
 
m
b
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
t
e
x
t
-
s
m
"
>
F
e
t
c
h
i
n
g
 
l
i
v
e
 
i
s
s
u
e
s
.
.
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
i
s
s
u
e
s
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
s
u
e
s
.
m
a
p
(
(
i
s
s
u
e
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
s
s
u
e
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
i
s
s
u
e
.
h
t
m
l
_
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
p
-
6
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
g
r
o
u
p
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
p
r
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
f
o
n
t
-
m
e
d
i
u
m
 
m
b
-
1
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
p
r
i
m
a
r
y
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
s
u
e
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
#
{
i
s
s
u
e
.
n
u
m
b
e
r
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
•
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
B
y
 
{
i
s
s
u
e
.
u
s
e
r
.
l
o
g
i
n
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
•
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
f
o
r
m
a
t
D
i
s
t
a
n
c
e
T
o
N
o
w
(
n
e
w
 
D
a
t
e
(
i
s
s
u
e
.
c
r
e
a
t
e
d
_
a
t
)
)
}
 
a
g
o
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
s
u
e
.
l
a
b
e
l
s
.
s
l
i
c
e
(
0
,
 
2
)
.
m
a
p
(
(
l
a
b
e
l
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
l
a
b
e
l
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
f
o
n
t
-
m
e
d
i
u
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
C
o
l
o
r
:
 
`
#
$
{
l
a
b
e
l
.
c
o
l
o
r
}
2
2
`
,
 
c
o
l
o
r
:
 
`
#
$
{
l
a
b
e
l
.
c
o
l
o
r
}
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
1
2
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>
N
o
 
a
c
t
i
v
e
 
&
q
u
o
t
;
g
o
o
d
 
f
i
r
s
t
 
i
s
s
u
e
&
q
u
o
t
;
 
f
o
u
n
d
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
h
e
c
k
 
t
h
e
 
f
u
l
l
 
i
s
s
u
e
 
t
r
a
c
k
e
r
 
f
o
r
 
o
t
h
e
r
 
b
e
g
i
n
n
e
r
 
t
a
g
s
 
l
i
k
e
 
&
q
u
o
t
;
h
e
l
p
 
w
a
n
t
e
d
&
q
u
o
t
;
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
c
t
i
v
i
t
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
p
r
i
m
a
r
y
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
H
o
w
 
t
o
 
c
o
n
t
r
i
b
u
t
e
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
O
N
T
R
I
B
U
T
I
O
N
_
S
T
E
P
S
.
m
a
p
(
(
g
u
i
d
e
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
g
u
i
d
e
.
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
-
6
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
 
l
e
f
t
-
6
 
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
l
a
c
k
 
t
e
x
t
-
p
r
i
m
a
r
y
/
1
0
 
d
a
r
k
:
t
e
x
t
-
p
r
i
m
a
r
y
/
2
0
 
i
t
a
l
i
c
 
s
e
l
e
c
t
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
u
i
d
e
.
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
2
 
p
t
-
2
"
>
{
g
u
i
d
e
.
t
i
t
l
e
}
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
g
u
i
d
e
.
d
e
s
c
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
w
h
i
t
e
 
r
o
u
n
d
e
d
-
3
x
l
 
p
-
8
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
b
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
1
0
 
-
r
i
g
h
t
-
1
0
 
w
-
4
0
 
h
-
4
0
 
t
e
x
t
-
w
h
i
t
e
/
5
 
r
o
t
a
t
e
-
1
2
"
 
/
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
 
f
o
n
t
-
b
o
l
d
 
m
b
-
6
"
>
C
o
n
t
r
i
b
u
t
e
 
T
o
d
a
y
<
/
h
3
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
6
 
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
 
s
i
z
e
=
"
l
g
"
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
b
g
-
w
h
i
t
e
 
t
e
x
t
-
b
l
a
c
k
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
b
o
r
d
e
r
-
n
o
n
e
 
s
h
a
d
o
w
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
r
e
p
o
.
u
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
R
e
p
o
s
i
t
o
r
y
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"
 
s
i
z
e
=
"
l
g
"
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
b
g
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
2
0
 
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
t
e
x
t
-
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
o
p
e
n
s
o
u
r
c
e
"
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
x
p
l
o
r
e
 
O
t
h
e
r
s
 
<
B
o
o
k
O
p
e
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
"
>
D
i
f
f
i
c
u
l
t
y
:
 
{
b
a
d
g
e
.
l
a
b
e
l
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
P
e
r
f
e
c
t
 
f
o
r
 
y
o
u
r
 
c
u
r
r
e
n
t
 
s
k
i
l
l
 
l
e
v
e
l
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
a
g
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
b
l
u
e
-
4
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
"
>
D
o
m
a
i
n
:
 
{
r
e
p
o
.
d
o
m
a
i
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
x
p
l
o
r
e
 
p
r
o
j
e
c
t
s
 
i
n
 
t
h
e
 
{
r
e
p
o
.
d
o
m
a
i
n
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
}
 
s
p
a
c
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
r
o
u
n
d
e
d
-
3
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
4
"
>
I
n
t
e
r
n
H
a
c
k
 
R
e
s
o
u
r
c
e
s
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
I
N
T
E
R
N
H
A
C
K
_
R
E
S
O
U
R
C
E
S
.
m
a
p
(
(
l
i
n
k
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
l
i
n
k
.
t
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
l
i
n
k
.
t
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
p
r
i
m
a
r
y
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
r
o
u
p
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
i
n
k
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
-
t
r
a
n
s
l
a
t
e
-
x
-
2
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
b
o
r
d
e
r
-
l
-
4
 
b
o
r
d
e
r
-
p
r
i
m
a
r
y
 
p
l
-
6
 
p
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
t
e
x
t
-
s
m
 
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
&
q
u
o
t
;
C
o
n
t
r
i
b
u
t
i
n
g
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
i
s
 
o
n
e
 
o
f
 
t
h
e
 
b
e
s
t
 
w
a
y
s
 
t
o
 
g
r
o
w
 
y
o
u
r
 
n
e
t
w
o
r
k
 
a
n
d
 
c
a
r
e
e
r
 
a
s
 
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
u
d
e
n
t
 
d
e
v
e
l
o
p
e
r
.
&
q
u
o
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
t
-
2
"
>
—
 
I
n
t
e
r
n
H
a
c
k
 
T
e
a
m
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
a
i
n
>




 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


