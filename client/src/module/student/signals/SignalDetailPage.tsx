
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
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
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


 
 
A
r
r
o
w
L
e
f
t
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


 
 
B
r
i
e
f
c
a
s
e
,


 
 
B
u
i
l
d
i
n
g
2
,


 
 
D
o
l
l
a
r
S
i
g
n
,


 
 
M
a
p
P
i
n
,


 
 
C
a
l
e
n
d
a
r
,


 
 
G
l
o
b
e
,


 
 
U
s
e
r
s
,


 
 
T
a
g
,


 
 
R
a
d
a
r
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
 
q
u
e
r
y
K
e
y
s
 
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
q
u
e
r
y
-
k
e
y
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
 
F
u
n
d
i
n
g
S
i
g
n
a
l
,
 
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
R
e
s
p
o
n
s
e
 
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
 
g
e
t
S
i
g
n
a
l
B
y
I
d
,
 
g
e
t
S
i
g
n
a
l
S
o
u
r
c
e
s
,
 
q
u
e
r
y
S
i
g
n
a
l
s
 
}
 
f
r
o
m
 
"
.
/
s
i
g
n
a
l
s
-
a
p
i
"
;




f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
D
a
t
e
(
i
s
o
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
o
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
u
n
d
e
f
i
n
e
d
,
 
{


 
 
 
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
,


 
 
 
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,


 
 
 
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
,


 
 
}
)
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
 
f
r
e
s
h
n
e
s
s
L
a
b
e
l
(
i
s
o
:
 
s
t
r
i
n
g
)
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
t
o
n
e
:
 
"
f
r
e
s
h
"
 
|
 
"
n
o
r
m
a
l
"
 
|
 
"
s
t
a
l
e
"
 
}
 
{


 
 
c
o
n
s
t
 
d
a
y
s
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
D
a
t
e
.
n
o
w
(
)
 
-
 
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
o
)
.
g
e
t
T
i
m
e
(
)
)
 
/
 
8
6
_
4
0
0
_
0
0
0
)
;


 
 
i
f
 
(
d
a
y
s
 
<
=
 
7
)
 
r
e
t
u
r
n
 
{
 
l
a
b
e
l
:
 
"
F
r
e
s
h
,
 
l
a
s
t
 
7
 
d
a
y
s
"
,
 
t
o
n
e
:
 
"
f
r
e
s
h
"
 
}
;


 
 
i
f
 
(
d
a
y
s
 
<
=
 
3
0
)
 
r
e
t
u
r
n
 
{
 
l
a
b
e
l
:
 
`
$
{
S
t
r
i
n
g
(
d
a
y
s
)
}
d
 
o
l
d
`
,
 
t
o
n
e
:
 
"
n
o
r
m
a
l
"
 
}
;


 
 
r
e
t
u
r
n
 
{
 
l
a
b
e
l
:
 
`
$
{
S
t
r
i
n
g
(
d
a
y
s
)
}
d
 
o
l
d
`
,
 
t
o
n
e
:
 
"
s
t
a
l
e
"
 
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
 
i
n
f
e
r
C
a
r
e
e
r
s
U
r
l
(
s
i
g
n
a
l
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
)
:
 
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
 
{


 
 
i
f
 
(
s
i
g
n
a
l
.
c
a
r
e
e
r
s
U
r
l
)
 
r
e
t
u
r
n
 
s
i
g
n
a
l
.
c
a
r
e
e
r
s
U
r
l
;


 
 
i
f
 
(
s
i
g
n
a
l
.
c
o
m
p
a
n
y
W
e
b
s
i
t
e
)
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
u
 
=
 
n
e
w
 
U
R
L
(
s
i
g
n
a
l
.
c
o
m
p
a
n
y
W
e
b
s
i
t
e
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
`
$
{
u
.
o
r
i
g
i
n
}
/
c
a
r
e
e
r
s
`
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
n
u
l
l
;


}




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
 
S
i
g
n
a
l
D
e
t
a
i
l
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
 
i
d
:
 
i
d
P
a
r
a
m
 
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
 
i
d
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
 
i
d
 
=
 
N
u
m
b
e
r
(
i
d
P
a
r
a
m
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
s
i
g
n
a
l
,
 
i
s
L
o
a
d
i
n
g
,
 
e
r
r
o
r
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
F
u
n
d
i
n
g
S
i
g
n
a
l
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
s
i
g
n
a
l
s
.
d
e
t
a
i
l
(
i
d
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
g
e
t
S
i
g
n
a
l
B
y
I
d
(
i
d
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
i
d
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
s
o
u
r
c
e
s
D
a
t
a
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
s
i
g
n
a
l
s
.
s
o
u
r
c
e
s
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
g
e
t
S
i
g
n
a
l
S
o
u
r
c
e
s
(
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
6
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
r
e
l
a
t
e
d
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
R
e
s
p
o
n
s
e
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
s
i
g
n
a
l
s
.
l
i
s
t
(
{


 
 
 
 
 
 
r
e
l
a
t
e
d
:
 
s
i
g
n
a
l
?
.
i
d
 
?
?
 
0
,


 
 
 
 
 
 
s
r
c
:
 
s
i
g
n
a
l
?
.
s
o
u
r
c
e
 
?
?
 
"
"
,


 
 
 
 
}
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>


 
 
 
 
 
 
q
u
e
r
y
S
i
g
n
a
l
s
(
{


 
 
 
 
 
 
 
 
p
a
g
e
:
 
1
,


 
 
 
 
 
 
 
 
l
i
m
i
t
:
 
4
,


 
 
 
 
 
 
 
 
s
o
r
t
:
 
"
r
e
c
e
n
t
"
,


 
 
 
 
 
 
 
 
s
o
u
r
c
e
:
 
s
i
g
n
a
l
?
.
s
o
u
r
c
e
,


 
 
 
 
 
 
}
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
B
o
o
l
e
a
n
(
s
i
g
n
a
l
?
.
s
o
u
r
c
e
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
i
f
 
(
i
s
L
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
p
b
-
1
6
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
"
S
i
g
n
a
l
"
 
n
o
I
n
d
e
x
 
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
h
-
9
6
 
r
o
u
n
d
e
d
-
m
d
 
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
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
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
s
i
g
n
a
l
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
p
b
-
1
6
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
"
S
i
g
n
a
l
 
n
o
t
 
f
o
u
n
d
"
 
n
o
I
n
d
e
x
 
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
 
p
y
-
2
0
 
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
 
r
o
u
n
d
e
d
-
m
d
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
w
-
1
6
 
h
-
1
6
 
m
x
-
a
u
t
o
 
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
s
t
o
n
e
-
8
0
0
 
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
 
r
o
u
n
d
e
d
-
m
d
 
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
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
a
d
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
7
 
h
-
7
 
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
 
/
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
 
m
b
-
4
"
>
T
h
i
s
 
s
i
g
n
a
l
 
c
o
u
l
d
 
n
o
t
 
b
e
 
l
o
a
d
e
d
.
<
/
p
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
s
t
u
d
e
n
t
/
s
i
g
n
a
l
s
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
s
t
o
n
e
-
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
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
 
B
a
c
k
 
t
o
 
s
i
g
n
a
l
s


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
i
n
i
t
i
a
l
 
=
 
s
i
g
n
a
l
.
c
o
m
p
a
n
y
N
a
m
e
.
t
r
i
m
(
)
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
|
|
 
"
?
"
;


 
 
c
o
n
s
t
 
s
o
u
r
c
e
N
a
m
e
 
=


 
 
 
 
s
o
u
r
c
e
s
D
a
t
a
?
.
s
o
u
r
c
e
s
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
i
g
n
a
l
.
s
o
u
r
c
e
)
?
.
n
a
m
e
 
?
?
 
s
i
g
n
a
l
.
s
o
u
r
c
e
;


 
 
c
o
n
s
t
 
f
r
e
s
h
n
e
s
s
 
=
 
f
r
e
s
h
n
e
s
s
L
a
b
e
l
(
s
i
g
n
a
l
.
a
n
n
o
u
n
c
e
d
A
t
)
;


 
 
c
o
n
s
t
 
c
a
r
e
e
r
s
 
=
 
i
n
f
e
r
C
a
r
e
e
r
s
U
r
l
(
s
i
g
n
a
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
l
a
t
e
d
O
t
h
e
r
s
 
=
 
(
r
e
l
a
t
e
d
?
.
s
i
g
n
a
l
s
 
?
?
 
[
]
)
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
i
d
 
!
=
=
 
s
i
g
n
a
l
.
i
d
)
.
s
l
i
c
e
(
0
,
 
3
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
p
b
-
1
6
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
s
i
g
n
a
l
.
c
o
m
p
a
n
y
N
a
m
e
}
,
 
S
i
g
n
a
l
`
}
 
n
o
I
n
d
e
x
 
/
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
2
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
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
m
t
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
c
a
r
d
 
*
/
}


 
 
 
 
 
 
 
 
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
 
r
o
u
n
d
e
d
-
m
d
 
p
-
6
 
m
d
:
p
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
s
t
u
d
e
n
t
/
s
i
g
n
a
l
s
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
 
g
a
p
-
1
.
5
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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
s
t
o
n
e
-
5
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
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
 
m
b
-
5
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
f
u
n
d
i
n
g
 
s
i
g
n
a
l
s


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
4
 
f
l
e
x
-
w
r
a
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
m
d
 
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
s
t
o
n
e
-
8
0
0
 
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
 
s
h
r
i
n
k
-
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
l
o
g
o
U
r
l
 
?
 
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
s
i
g
n
a
l
.
l
o
g
o
U
r
l
}
 
a
l
t
=
"
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
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
e
r
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
-
1
 
m
i
n
-
w
-
0
"
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
2
x
l
 
m
d
:
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
s
t
o
n
e
-
5
0
 
l
e
a
d
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
s
i
g
n
a
l
.
c
o
m
p
a
n
y
N
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
t
-
2
 
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
x
-
4
 
g
a
p
-
y
-
1
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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
>
{
s
o
u
r
c
e
N
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
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
e
n
d
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
D
a
t
e
(
s
i
g
n
a
l
.
a
n
n
o
u
n
c
e
d
A
t
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
{
`
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
 
g
a
p
-
1
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
e
s
h
n
e
s
s
.
t
o
n
e
 
=
=
=
 
"
f
r
e
s
h
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
l
i
m
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
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
f
r
e
s
h
n
e
s
s
.
t
o
n
e
 
=
=
=
 
"
s
t
a
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
h
-
1
.
5
 
w
-
1
.
5
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
e
s
h
n
e
s
s
.
t
o
n
e
 
=
=
=
 
"
f
r
e
s
h
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
f
r
e
s
h
n
e
s
s
.
t
o
n
e
 
=
=
=
 
"
s
t
a
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
e
s
h
n
e
s
s
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
h
i
r
i
n
g
S
i
g
n
a
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
1
 
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
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
i
k
e
l
y
 
h
i
r
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
t
-
6
 
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
 
g
a
p
-
3
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
s
i
g
n
a
l
.
s
o
u
r
c
e
U
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
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
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
5
0
 
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
m
d
 
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
s
e
m
i
b
o
l
d
 
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
9
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
o
p
a
c
i
t
y
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
e
n
 
o
r
i
g
i
n
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
r
e
e
r
s
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
c
a
r
e
e
r
s
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
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
b
g
-
l
i
m
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
b
g
-
l
i
m
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
m
d
 
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
s
e
m
i
b
o
l
d
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
s
i
t
 
c
a
r
e
e
r
s
 
p
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
c
o
m
p
a
n
y
W
e
b
s
i
t
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
s
i
g
n
a
l
.
c
o
m
p
a
n
y
W
e
b
s
i
t
e
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
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
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
s
t
o
n
e
-
5
0
 
r
o
u
n
d
e
d
-
m
d
 
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
s
e
m
i
b
o
l
d
 
h
o
v
e
r
:
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
4
0
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
3
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
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
l
o
b
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
e
b
s
i
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
B
o
d
y
:
 
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
 
+
 
f
a
c
t
s
 
*
/
}


 
 
 
 
 
 
 
 
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
4
 
m
t
-
4
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
 
r
o
u
n
d
e
d
-
m
d
 
p
-
6
 
m
d
:
p
-
8
"
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
s
m
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
b
o
u
t
 
t
h
i
s
 
s
i
g
n
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
d
:
t
e
x
t
-
b
a
s
e
 
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
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
 
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
s
i
g
n
a
l
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
0
 
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
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
 
p
r
o
v
i
d
e
d
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
t
a
g
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
t
-
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
a
g
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
t
a
g
s
.
m
a
p
(
(
t
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
t
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
 
g
a
p
-
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
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
s
t
o
n
e
-
8
0
0
 
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
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}




 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
i
n
v
e
s
t
o
r
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
t
-
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
v
e
s
t
o
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
i
n
v
e
s
t
o
r
s
.
m
a
p
(
(
i
n
v
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
i
n
v
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
 
g
a
p
-
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
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
s
t
o
n
e
-
8
0
0
 
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
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
v
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
a
c
t
s
 
s
i
d
e
b
a
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
 
r
o
u
n
d
e
d
-
m
d
 
p
-
6
"
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
s
m
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
i
c
k
 
f
a
c
t
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
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
4
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
A
m
o
u
n
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
D
o
l
l
a
r
S
i
g
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
 
t
e
x
t
-
l
i
m
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
l
i
m
e
-
4
0
0
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
m
o
u
n
t
 
r
a
i
s
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
A
m
o
u
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
R
o
u
n
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
B
u
i
l
d
i
n
g
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
R
o
u
n
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
i
g
n
a
l
.
f
u
n
d
i
n
g
R
o
u
n
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
i
n
d
u
s
t
r
y
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
B
u
i
l
d
i
n
g
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
d
u
s
t
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
i
g
n
a
l
.
i
n
d
u
s
t
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
g
n
a
l
.
h
q
L
o
c
a
t
i
o
n
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
M
a
p
P
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
H
Q
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
i
g
n
a
l
.
h
q
L
o
c
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
C
a
l
e
n
d
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
4
 
h
-
4
 
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
n
n
o
u
n
c
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
a
t
D
a
t
e
(
s
i
g
n
a
l
.
a
n
n
o
u
n
c
e
d
A
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
l
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
l
a
t
e
d
 
*
/
}


 
 
 
 
 
 
 
 
{
r
e
l
a
t
e
d
O
t
h
e
r
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
t
-
1
0
"
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
s
m
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
o
r
e
 
f
r
o
m
 
{
s
o
u
r
c
e
N
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
l
a
t
e
d
O
t
h
e
r
s
.
m
a
p
(
(
r
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
s
t
u
d
e
n
t
/
s
i
g
n
a
l
s
/
$
{
S
t
r
i
n
g
(
r
.
i
d
)
}
`
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
n
o
-
u
n
d
e
r
l
i
n
e
 
b
l
o
c
k
 
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
 
r
o
u
n
d
e
d
-
m
d
 
p
-
4
 
h
o
v
e
r
:
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
4
0
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
3
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
c
o
l
o
r
s
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
s
t
o
n
e
-
5
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
c
o
m
p
a
n
y
N
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
f
u
n
d
i
n
g
A
m
o
u
n
t
 
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
l
i
m
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
l
i
m
e
-
4
0
0
 
m
t
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
f
u
n
d
i
n
g
A
m
o
u
n
t
}
 
{
r
.
f
u
n
d
i
n
g
R
o
u
n
d
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
1
"
>
{
r
.
f
u
n
d
i
n
g
R
o
u
n
d
 
?
?
 
"
"
}
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
L
i
n
k
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
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}




 
 
 
 
 
 
 
 
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
t
-
1
0
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
s
t
u
d
e
n
t
/
s
i
g
n
a
l
s
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
s
t
o
n
e
-
5
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
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
 
A
l
l
 
s
i
g
n
a
l
s


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
o
t
i
o
n
.
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


 
 
)
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
 
F
a
c
t
(
{


 
 
i
c
o
n
,


 
 
l
a
b
e
l
,


 
 
v
a
l
u
e
,


}
:
 
{


 
 
i
c
o
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
v
a
l
u
e
:
 
s
t
r
i
n
g
;


}
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
t
-
0
.
5
"
>
{
i
c
o
n
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
<
d
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
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


 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
d
t
>


 
 
 
 
 
 
 
 
<
d
d
 
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
s
t
o
n
e
-
5
0
 
m
t
-
0
.
5
 
b
r
e
a
k
-
w
o
r
d
s
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
}


 
 
 
 
 
 
 
 
<
/
d
d
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


 
 
)
;


}


