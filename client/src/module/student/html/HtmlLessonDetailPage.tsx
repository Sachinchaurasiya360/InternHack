
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
S
t
a
t
e
,
 
u
s
e
M
e
m
o
,
 
u
s
e
C
a
l
l
b
a
c
k
,
 
u
s
e
E
f
f
e
c
t
 
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
,
 
u
s
e
N
a
v
i
g
a
t
e
,
 
N
a
v
i
g
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


 
 
C
h
e
v
r
o
n
L
e
f
t
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
 
S
t
a
r
,
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,


 
 
I
n
f
o
,
 
A
r
r
o
w
U
p
R
i
g
h
t
,
 
R
o
t
a
t
e
C
c
w
,
 
L
i
g
h
t
b
u
l
b
,
 
E
y
e
,
 
C
o
d
e
2
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
 
C
o
d
e
B
l
o
c
k
 
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
C
o
d
e
B
l
o
c
k
"
;


i
m
p
o
r
t
 
{
 
s
e
c
t
i
o
n
s
,
 
l
e
s
s
o
n
s
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
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
 
H
t
m
l
P
r
o
g
r
e
s
s
,
 
P
r
a
c
t
i
c
e
E
x
e
r
c
i
s
e
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
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
 
H
t
m
l
E
d
i
t
o
r
 
f
r
o
m
 
"
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
H
t
m
l
E
d
i
t
o
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
 
L
i
v
e
P
r
e
v
i
e
w
 
}
 
f
r
o
m
 
"
.
.
/
s
h
a
r
e
d
/
L
i
v
e
P
r
e
v
i
e
w
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
 
{
 
u
s
e
A
u
t
h
S
t
o
r
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
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
r
e
p
o
r
t
M
i
l
e
s
t
o
n
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
m
i
l
e
s
t
o
n
e
.
u
t
i
l
s
"
;




c
o
n
s
t
 
F
R
E
E
_
L
I
M
I
T
 
=
 
5
;




f
u
n
c
t
i
o
n
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
:
 
H
t
m
l
P
r
o
g
r
e
s
s
 
{


 
 
t
r
y
 
{


 
 
 
 
r
e
t
u
r
n
 
J
S
O
N
.
p
a
r
s
e
(
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
"
h
t
m
l
-
p
r
o
g
r
e
s
s
"
)
 
|
|
 
"
{
}
"
)
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
 
{
}
;


 
 
}


}




f
u
n
c
t
i
o
n
 
t
o
g
g
l
e
P
r
o
g
r
e
s
s
(
l
e
s
s
o
n
I
d
:
 
s
t
r
i
n
g
)
:
 
b
o
o
l
e
a
n
 
{


 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
 
=
 
p
r
o
g
r
e
s
s
[
l
e
s
s
o
n
I
d
]
?
.
c
o
m
p
l
e
t
e
d
 
?
?
 
f
a
l
s
e
;


 
 
p
r
o
g
r
e
s
s
[
l
e
s
s
o
n
I
d
]
 
=
 
{
 
.
.
.
p
r
o
g
r
e
s
s
[
l
e
s
s
o
n
I
d
]
,
 
c
o
m
p
l
e
t
e
d
:
 
!
c
u
r
r
e
n
t
 
}
;


 
 
t
r
y
 
{
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
"
h
t
m
l
-
p
r
o
g
r
e
s
s
"
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
p
r
o
g
r
e
s
s
)
)
;
 
}
 
c
a
t
c
h
 
{
 
c
o
n
s
o
l
e
.
w
a
r
n
(
"
F
a
i
l
e
d
 
t
o
 
p
e
r
s
i
s
t
 
t
o
 
l
o
c
a
l
S
t
o
r
a
g
e
:
 
h
t
m
l
-
p
r
o
g
r
e
s
s
"
)
;
 
}


 
 
r
e
t
u
r
n
 
!
c
u
r
r
e
n
t
;


}




c
o
n
s
t
 
D
I
F
F
_
S
T
Y
L
E
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
B
e
g
i
n
n
e
r
:
 
 
 
 
 
"
t
e
x
t
-
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
 
b
o
r
d
e
r
-
g
r
e
e
n
-
3
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
g
r
e
e
n
-
9
0
0
/
6
0
"
,


 
 
I
n
t
e
r
m
e
d
i
a
t
e
:
 
"
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
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
-
3
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
a
m
b
e
r
-
9
0
0
/
6
0
"
,


 
 
A
d
v
a
n
c
e
d
:
 
 
 
 
 
"
t
e
x
t
-
r
e
d
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
r
e
d
-
4
0
0
 
b
o
r
d
e
r
-
r
e
d
-
3
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
r
e
d
-
9
0
0
/
6
0
"
,


 
 
E
a
s
y
:
 
 
 
 
 
 
 
 
 
"
t
e
x
t
-
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
 
b
o
r
d
e
r
-
g
r
e
e
n
-
3
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
g
r
e
e
n
-
9
0
0
/
6
0
"
,


 
 
M
e
d
i
u
m
:
 
 
 
 
 
 
 
"
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
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
-
3
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
a
m
b
e
r
-
9
0
0
/
6
0
"
,


 
 
H
a
r
d
:
 
 
 
 
 
 
 
 
 
"
t
e
x
t
-
r
e
d
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
r
e
d
-
4
0
0
 
b
o
r
d
e
r
-
r
e
d
-
3
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
r
e
d
-
9
0
0
/
6
0
"
,


}
;




f
u
n
c
t
i
o
n
 
M
e
t
a
C
h
i
p
(
{
 
c
h
i
l
d
r
e
n
,
 
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
"
 
}
:
 
{
 
c
h
i
l
d
r
e
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
 
c
l
a
s
s
N
a
m
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
 
t
e
x
t
-
[
1
1
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
r
 
b
o
r
d
e
r
 
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
 
$
{
c
l
a
s
s
N
a
m
e
 
|
|
 
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
}
`
}
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
s
p
a
n
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
 
S
e
c
t
i
o
n
L
a
b
e
l
(
{
 
d
o
t
,
 
c
h
i
l
d
r
e
n
 
}
:
 
{
 
d
o
t
:
 
s
t
r
i
n
g
;
 
c
h
i
l
d
r
e
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
 
w
-
1
 
$
{
d
o
t
}
`
}
 
/
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
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
 
E
x
e
r
c
i
s
e
S
e
c
t
i
o
n
(
{
 
e
x
e
r
c
i
s
e
s
,
 
l
e
s
s
o
n
I
d
 
}
:
 
{
 
e
x
e
r
c
i
s
e
s
:
 
P
r
a
c
t
i
c
e
E
x
e
r
c
i
s
e
[
]
;
 
l
e
s
s
o
n
I
d
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
I
d
x
,
 
s
e
t
A
c
t
i
v
e
I
d
x
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
0
)
;


 
 
c
o
n
s
t
 
[
c
o
d
e
,
 
s
e
t
C
o
d
e
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
"
"
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
H
i
n
t
s
,
 
s
e
t
S
h
o
w
H
i
n
t
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
0
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
S
o
l
u
t
i
o
n
,
 
s
e
t
S
h
o
w
S
o
l
u
t
i
o
n
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
s
o
l
v
e
d
,
 
s
e
t
S
o
l
v
e
d
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
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
b
o
o
l
e
a
n
>
>
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;


 
 
 
 
r
e
t
u
r
n
 
p
[
l
e
s
s
o
n
I
d
]
?
.
e
x
e
r
c
i
s
e
s
S
o
l
v
e
d
 
?
?
 
{
}
;


 
 
}
)
;




 
 
c
o
n
s
t
 
e
x
e
r
c
i
s
e
 
=
 
e
x
e
r
c
i
s
e
s
[
a
c
t
i
v
e
I
d
x
]
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
e
x
e
r
c
i
s
e
)
 
r
e
t
u
r
n
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
C
o
d
e
(
e
x
e
r
c
i
s
e
.
s
t
a
r
t
e
r
C
o
d
e
)
;


 
 
 
 
 


 
 
 
 
s
e
t
S
h
o
w
H
i
n
t
s
(
0
)
;


 
 
 
 
 


 
 
 
 
s
e
t
S
h
o
w
S
o
l
u
t
i
o
n
(
f
a
l
s
e
)
;


 
 
}
,
 
[
a
c
t
i
v
e
I
d
x
,
 
e
x
e
r
c
i
s
e
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
R
e
s
e
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
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
e
x
e
r
c
i
s
e
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
C
o
d
e
(
e
x
e
r
c
i
s
e
.
s
t
a
r
t
e
r
C
o
d
e
)
;


 
 
 
 
s
e
t
S
h
o
w
H
i
n
t
s
(
0
)
;


 
 
 
 
s
e
t
S
h
o
w
S
o
l
u
t
i
o
n
(
f
a
l
s
e
)
;


 
 
}
,
 
[
e
x
e
r
c
i
s
e
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
M
a
r
k
S
o
l
v
e
d
 
=
 
u
s
e
C
a
l
l
b
a
c
k
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
e
x
e
r
c
i
s
e
 
|
|
 
s
o
l
v
e
d
[
e
x
e
r
c
i
s
e
.
i
d
]
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
 
u
p
d
a
t
e
d
 
=
 
{
 
.
.
.
s
o
l
v
e
d
,
 
[
e
x
e
r
c
i
s
e
.
i
d
]
:
 
t
r
u
e
 
}
;


 
 
 
 
s
e
t
S
o
l
v
e
d
(
u
p
d
a
t
e
d
)
;


 
 
 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;


 
 
 
 
p
r
o
g
r
e
s
s
[
l
e
s
s
o
n
I
d
]
 
=
 
{
 
.
.
.
p
r
o
g
r
e
s
s
[
l
e
s
s
o
n
I
d
]
,
 
e
x
e
r
c
i
s
e
s
S
o
l
v
e
d
:
 
u
p
d
a
t
e
d
 
}
;


 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
"
h
t
m
l
-
p
r
o
g
r
e
s
s
"
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
p
r
o
g
r
e
s
s
)
)
;


 
 
}
,
 
[
e
x
e
r
c
i
s
e
,
 
s
o
l
v
e
d
,
 
l
e
s
s
o
n
I
d
]
)
;




 
 
i
f
 
(
!
e
x
e
r
c
i
s
e
)
 
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




 
 
c
o
n
s
t
 
s
o
l
v
e
d
C
o
u
n
t
 
=
 
e
x
e
r
c
i
s
e
s
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
s
o
l
v
e
d
[
e
.
i
d
]
)
.
l
e
n
g
t
h
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
3
5
 
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
s
p
a
c
e
-
y
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
e
n
d
 
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
S
e
c
t
i
o
n
L
a
b
e
l
 
d
o
t
=
"
b
g
-
o
r
a
n
g
e
-
4
0
0
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
3
 
h
-
3
"
 
/
>
 
p
r
a
c
t
i
c
e
 
/
 
e
x
e
r
c
i
s
e
s


 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
m
t
-
2
 
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
"
>
P
r
a
c
t
i
c
e
 
e
x
e
r
c
i
s
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
{
s
o
l
v
e
d
C
o
u
n
t
}
 
/
 
{
e
x
e
r
c
i
s
e
s
.
l
e
n
g
t
h
}
 
s
o
l
v
e
d


 
 
 
 
 
 
 
 
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
1
.
5
 
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


 
 
 
 
 
 
 
 
{
e
x
e
r
c
i
s
e
s
.
m
a
p
(
(
e
x
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
i
 
=
=
=
 
a
c
t
i
v
e
I
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
o
l
v
e
d
 
=
 
s
o
l
v
e
d
[
e
x
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
e
x
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
I
d
x
(
i
)
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
.
5
 
p
x
-
3
 
p
y
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
 
b
o
r
d
e
r
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
A
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
9
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
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
S
o
l
v
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
i
m
e
-
4
0
0
 
b
o
r
d
e
r
-
l
i
m
e
-
3
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
l
i
m
e
-
9
0
0
/
6
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
l
i
m
e
-
9
0
0
/
2
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
o
l
v
e
d
 
&
&
 
!
i
s
A
c
t
i
v
e
 
&
&
 
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
3
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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
5
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
a
p
-
3
 
m
b
-
2
.
5
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
"
>
{
e
x
e
r
c
i
s
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
M
e
t
a
C
h
i
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
{
D
I
F
F
_
S
T
Y
L
E
[
e
x
e
r
c
i
s
e
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
]
}
>
{
e
x
e
r
c
i
s
e
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
}
<
/
M
e
t
a
C
h
i
p
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
l
i
n
e
"
>
{
e
x
e
r
c
i
s
e
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




 
 
 
 
 
 
<
H
t
m
l
E
d
i
t
o
r
 
v
a
l
u
e
=
{
c
o
d
e
}
 
o
n
C
h
a
n
g
e
=
{
s
e
t
C
o
d
e
}
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
R
e
s
e
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
3
 
p
y
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
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
S
h
o
w
H
i
n
t
s
(
(
h
)
 
=
>
 
M
a
t
h
.
m
i
n
(
h
 
+
 
1
,
 
e
x
e
r
c
i
s
e
.
h
i
n
t
s
.
l
e
n
g
t
h
)
)
}


 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
h
o
w
H
i
n
t
s
 
>
=
 
e
x
e
r
c
i
s
e
.
h
i
n
t
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
3
 
p
y
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
a
m
b
e
r
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
a
m
b
e
r
-
4
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
a
m
b
e
r
-
3
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
a
m
b
e
r
-
9
0
0
/
6
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
 
h
o
v
e
r
:
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
2
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
L
i
g
h
t
b
u
l
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
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
h
i
n
t
 
(
{
s
h
o
w
H
i
n
t
s
}
/
{
e
x
e
r
c
i
s
e
.
h
i
n
t
s
.
l
e
n
g
t
h
}
)


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
{
!
s
o
l
v
e
d
[
e
x
e
r
c
i
s
e
.
i
d
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
M
a
r
k
S
o
l
v
e
d
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
3
 
p
y
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
l
i
m
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
l
i
m
e
-
4
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
l
i
m
e
-
3
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
l
i
m
e
-
9
0
0
/
6
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
l
i
m
e
-
9
0
0
/
2
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
 
s
o
l
v
e
d


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
S
o
l
u
t
i
o
n
(
(
s
)
 
=
>
 
!
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
s
h
o
w
S
o
l
u
t
i
o
n
)
 
s
e
t
C
o
d
e
(
e
x
e
r
c
i
s
e
.
s
o
l
u
t
i
o
n
)
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
s
e
t
C
o
d
e
(
e
x
e
r
c
i
s
e
.
s
t
a
r
t
e
r
C
o
d
e
)
;


 
 
 
 
 
 
 
 
 
 
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
l
-
a
u
t
o
 
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
3
 
p
y
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
E
y
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


 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
S
o
l
u
t
i
o
n
 
?
 
"
h
i
d
e
 
s
o
l
u
t
i
o
n
"
 
:
 
"
s
o
l
u
t
i
o
n
"
}


 
 
 
 
 
 
 
 
<
/
b
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




 
 
 
 
 
 
{
s
h
o
w
H
i
n
t
s
 
>
 
0
 
&
&
 
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
e
x
e
r
c
i
s
e
.
h
i
n
t
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
 
s
h
o
w
H
i
n
t
s
)
.
m
a
p
(
(
h
i
n
t
,
 
i
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
i
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
 
p
-
4
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
a
b
u
l
a
r
-
n
u
m
s
 
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
a
m
b
e
r
-
4
0
0
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
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
h
i
n
t
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


 
 
 
 
 
 
)
}




 
 
 
 
 
 
<
L
i
v
e
P
r
e
v
i
e
w
 
h
t
m
l
=
{
c
o
d
e
}
 
h
e
i
g
h
t
=
"
2
0
0
p
x
"
 
/
>




 
 
 
 
 
 
{
s
o
l
v
e
d
[
e
x
e
r
c
i
s
e
.
i
d
]
 
&
&
 
a
c
t
i
v
e
I
d
x
 
<
 
e
x
e
r
c
i
s
e
s
.
l
e
n
g
t
h
 
-
 
1
 
&
&
 
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
 
j
u
s
t
i
f
y
-
e
n
d
"
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
I
d
x
(
a
c
t
i
v
e
I
d
x
 
+
 
1
)
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
g
r
o
u
p
 
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
4
 
p
y
-
2
 
t
e
x
t
-
[
1
1
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
3
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
5
 
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
o
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
 
 
n
e
x
t
 
e
x
e
r
c
i
s
e


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
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
3
.
5
 
h
-
3
.
5
 
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
y
-
0
.
5
 
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
.
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
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
b
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


 
 
 
 
 
 
)
}


 
 
 
 
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


 
 
)
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
 
H
t
m
l
L
e
s
s
o
n
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
 
s
e
c
t
i
o
n
S
l
u
g
,
 
l
e
s
s
o
n
I
d
 
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
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
b
a
s
e
P
a
t
h
 
=
 
"
/
l
e
a
r
n
/
h
t
m
l
"
;


 
 
c
o
n
s
t
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
;




 
 
c
o
n
s
t
 
[
c
o
m
p
l
e
t
e
d
,
 
s
e
t
C
o
m
p
l
e
t
e
d
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
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;


 
 
 
 
r
e
t
u
r
n
 
!
!
p
[
l
e
s
s
o
n
I
d
 
?
?
 
"
"
]
?
.
c
o
m
p
l
e
t
e
d
;


 
 
}
)
;




 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
 
=
 
s
e
c
t
i
o
n
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
e
c
t
i
o
n
S
l
u
g
)
;


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
 
=
 
u
s
e
M
e
m
o
(


 
 
 
 
(
)
 
=
>
 
l
e
s
s
o
n
s
.
f
i
l
t
e
r
(
(
l
)
 
=
>
 
l
.
s
e
c
t
i
o
n
I
d
 
=
=
=
 
s
e
c
t
i
o
n
S
l
u
g
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
o
r
d
e
r
I
n
d
e
x
 
-
 
b
.
o
r
d
e
r
I
n
d
e
x
)
,


 
 
 
 
[
s
e
c
t
i
o
n
S
l
u
g
]


 
 
)
;




 
 
c
o
n
s
t
 
l
e
s
s
o
n
 
=
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
.
f
i
n
d
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
s
s
o
n
I
d
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
I
n
d
e
x
 
=
 
l
e
s
s
o
n
 
?
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
.
f
i
n
d
I
n
d
e
x
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
s
s
o
n
.
i
d
)
 
:
 
-
1
;


 
 
c
o
n
s
t
 
p
r
e
v
L
e
s
s
o
n
 
=
 
c
u
r
r
e
n
t
I
n
d
e
x
 
>
 
0
 
?
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
[
c
u
r
r
e
n
t
I
n
d
e
x
 
-
 
1
]
 
:
 
n
u
l
l
;


 
 
c
o
n
s
t
 
n
e
x
t
L
e
s
s
o
n
 
=
 
c
u
r
r
e
n
t
I
n
d
e
x
 
<
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
[
c
u
r
r
e
n
t
I
n
d
e
x
 
+
 
1
]
 
:
 
n
u
l
l
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
T
o
g
g
l
e
C
o
m
p
l
e
t
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
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
l
e
s
s
o
n
I
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
 
n
e
w
V
a
l
 
=
 
t
o
g
g
l
e
P
r
o
g
r
e
s
s
(
l
e
s
s
o
n
I
d
)
;


 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
n
e
w
V
a
l
)
;


 
 
 
 
i
f
 
(
n
e
w
V
a
l
 
&
&
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
&
&
 
s
e
c
t
i
o
n
S
l
u
g
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;


 
 
 
 
 
 
c
o
n
s
t
 
a
l
l
D
o
n
e
 
=
 
s
e
c
t
i
o
n
L
e
s
s
o
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
l
)
 
=
>
 
p
r
o
g
r
e
s
s
[
l
.
i
d
]
?
.
c
o
m
p
l
e
t
e
d
)
;


 
 
 
 
 
 
i
f
 
(
a
l
l
D
o
n
e
)
 
r
e
p
o
r
t
M
i
l
e
s
t
o
n
e
(
"
C
O
U
R
S
E
_
C
O
M
P
L
E
T
E
"
,
 
"
h
t
m
l
"
)
;


 
 
 
 
}


 
 
}
,
 
[
l
e
s
s
o
n
I
d
,
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
s
e
c
t
i
o
n
S
l
u
g
,
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
]
)
;




 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
I
n
d
e
x
 
=
 
s
e
c
t
i
o
n
s
.
f
i
n
d
I
n
d
e
x
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
e
c
t
i
o
n
S
l
u
g
)
;


 
 
i
f
 
(
s
e
c
t
i
o
n
I
n
d
e
x
 
>
=
 
F
R
E
E
_
L
I
M
I
T
 
&
&
 
!
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
 
{


 
 
 
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
{
b
a
s
e
P
a
t
h
}
 
r
e
p
l
a
c
e
 
/
>
;


 
 
}




 
 
i
f
 
(
!
l
e
s
s
o
n
 
|
|
 
!
s
e
c
t
i
o
n
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
r
e
l
a
t
i
v
e
 
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
y
-
2
0
 
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
"
>
L
e
s
s
o
n
 
n
o
t
 
f
o
u
n
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
{
b
a
s
e
P
a
t
h
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
4
 
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
3
 
p
y
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
1
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
3
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
5
 
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
o
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
b
a
c
k
 
t
o
 
h
t
m
l
 
<
A
r
r
o
w
U
p
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
3
 
h
-
3
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
 
{
 
c
o
n
t
e
n
t
 
}
 
=
 
l
e
s
s
o
n
;


 
 
c
o
n
s
t
 
e
x
e
r
c
i
s
e
s
 
=
 
l
e
s
s
o
n
.
e
x
e
r
c
i
s
e
s
 
?
?
 
[
]
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
r
e
l
a
t
i
v
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
 
p
b
-
1
2
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
l
e
s
s
o
n
.
t
i
t
l
e
}
 
-
 
H
T
M
L
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
L
e
a
r
n
 
a
b
o
u
t
 
$
{
l
e
s
s
o
n
.
t
i
t
l
e
}
 
i
n
 
H
T
M
L
.
 
C
o
v
e
r
s
 
k
e
y
 
c
o
n
c
e
p
t
s
 
w
i
t
h
 
c
o
d
e
 
e
x
a
m
p
l
e
s
 
a
n
d
 
p
r
a
c
t
i
c
e
 
e
x
e
r
c
i
s
e
s
.
`
}


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
{
`
$
{
l
e
s
s
o
n
.
t
i
t
l
e
}
,
 
h
t
m
l
,
 
t
u
t
o
r
i
a
l
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
`
/
l
e
a
r
n
/
h
t
m
l
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
l
e
s
s
o
n
I
d
}
`
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
-
0
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
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
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
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
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
4
 
s
m
:
p
x
-
8
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
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
6
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
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
2
 
m
b
-
8
 
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
e
n
d
 
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
a
p
-
4
 
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
 
p
b
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
m
i
n
-
w
-
0
 
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
2
 
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
 
w
r
a
p
-
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
 
s
h
r
i
n
k
-
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
m
i
n
-
w
-
0
"
>
l
e
a
r
n
 
/
 
h
t
m
l
 
/
 
{
s
e
c
t
i
o
n
S
l
u
g
}
 
/
 
#
{
S
t
r
i
n
g
(
c
u
r
r
e
n
t
I
n
d
e
x
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
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
t
-
3
 
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
 
s
m
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
 
w
r
a
p
-
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
s
s
o
n
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
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
s
s
o
n
.
i
s
I
n
t
e
r
v
i
e
w
Q
u
e
s
t
i
o
n
 
&
&
 
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
5
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
5
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
"
 
/
>
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
t
-
3
 
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
M
e
t
a
C
h
i
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
{
D
I
F
F
_
S
T
Y
L
E
[
l
e
s
s
o
n
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
]
}
>
{
l
e
s
s
o
n
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
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
l
e
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
l
i
m
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
l
i
m
e
-
4
0
0
 
b
o
r
d
e
r
-
l
i
m
e
-
3
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
l
i
m
e
-
9
0
0
/
6
0
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
3
 
h
-
3
"
 
/
>
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
s
s
o
n
.
c
o
n
c
e
p
t
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
 
4
)
.
m
a
p
(
(
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
k
e
y
=
{
c
}
>
{
c
}
<
/
M
e
t
a
C
h
i
p
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
1
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
p
r
e
v
L
e
s
s
o
n
 
&
&
 
n
a
v
i
g
a
t
e
(
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
p
r
e
v
L
e
s
s
o
n
.
i
d
}
`
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
p
r
e
v
L
e
s
s
o
n
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
9
 
h
-
9
 
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
r
e
v
i
o
u
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
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
 
p
x
-
2
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
I
n
d
e
x
 
+
 
1
}
 
/
 
{
s
e
c
t
i
o
n
L
e
s
s
o
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
n
e
x
t
L
e
s
s
o
n
 
&
&
 
n
a
v
i
g
a
t
e
(
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
n
e
x
t
L
e
s
s
o
n
.
i
d
}
`
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
n
e
x
t
L
e
s
s
o
n
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
9
 
h
-
9
 
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
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
/
b
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




 
 
 
 
 
 
 
 
{
/
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
 
*
/
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
1
 
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
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
d
o
t
=
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
>
e
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
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
3
 
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
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
e
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




 
 
 
 
 
 
 
 
{
/
*
 
C
o
d
e
 
e
x
a
m
p
l
e
s
 
*
/
}


 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
c
o
d
e
E
x
a
m
p
l
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
1
5
 
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
b
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
e
n
d
 
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
 
m
b
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
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
d
o
t
=
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
>
c
o
d
e
 
/
 
e
x
a
m
p
l
e
s
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
m
t
-
2
 
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
"
>
C
o
d
e
 
e
x
a
m
p
l
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
c
o
d
e
E
x
a
m
p
l
e
s
.
l
e
n
g
t
h
}
 
t
o
t
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
c
o
d
e
E
x
a
m
p
l
e
s
.
m
a
p
(
(
e
x
a
m
p
l
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
k
e
y
=
{
i
}
 
e
x
a
m
p
l
e
=
{
e
x
a
m
p
l
e
}
 
l
a
n
g
u
a
g
e
=
"
h
t
m
l
"
 
/
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
I
m
p
o
r
t
a
n
t
 
n
o
t
e
s
 
*
/
}


 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
n
o
t
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
2
 
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
b
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
d
o
t
=
"
b
g
-
b
l
u
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
f
o
 
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
5
0
0
"
 
/
>
 
i
m
p
o
r
t
a
n
t
 
n
o
t
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
c
o
n
t
e
n
t
.
n
o
t
e
s
.
m
a
p
(
(
n
o
t
e
,
 
i
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
i
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
 
p
-
4
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
a
b
u
l
a
r
-
n
u
m
s
 
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
b
l
u
e
-
4
0
0
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
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
n
o
t
e
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
C
o
m
m
o
n
 
p
i
t
f
a
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
c
o
m
m
o
n
P
i
t
f
a
l
l
s
 
&
&
 
c
o
n
t
e
n
t
.
c
o
m
m
o
n
P
i
t
f
a
l
l
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
2
5
 
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
b
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
d
o
t
=
"
b
g
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
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
3
 
h
-
3
 
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
5
0
0
"
 
/
>
 
c
o
m
m
o
n
 
p
i
t
f
a
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
c
o
n
t
e
n
t
.
c
o
m
m
o
n
P
i
t
f
a
l
l
s
.
m
a
p
(
(
p
i
t
f
a
l
l
,
 
i
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
i
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
 
p
-
4
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
a
b
u
l
a
r
-
n
u
m
s
 
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
a
m
b
e
r
-
4
0
0
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
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
p
i
t
f
a
l
l
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
I
n
t
e
r
v
i
e
w
 
t
i
p
s
 
*
/
}


 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
i
n
t
e
r
v
i
e
w
T
i
p
s
 
&
&
 
c
o
n
t
e
n
t
.
i
n
t
e
r
v
i
e
w
T
i
p
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
3
 
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
b
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
d
o
t
=
"
b
g
-
v
i
o
l
e
t
-
4
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
3
 
h
-
3
 
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
 
f
i
l
l
-
v
i
o
l
e
t
-
5
0
0
"
 
/
>
 
i
n
t
e
r
v
i
e
w
 
t
i
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
i
n
t
e
r
v
i
e
w
T
i
p
s
.
m
a
p
(
(
t
i
p
,
 
i
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
i
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
v
i
o
l
e
t
-
3
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
v
i
o
l
e
t
-
9
0
0
/
6
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
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
 
f
i
l
l
-
v
i
o
l
e
t
-
5
0
0
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
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
t
i
p
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
e
x
e
r
c
i
s
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
 
&
&
 
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
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
e
r
c
i
s
e
S
e
c
t
i
o
n
 
e
x
e
r
c
i
s
e
s
=
{
e
x
e
r
c
i
s
e
s
}
 
l
e
s
s
o
n
I
d
=
{
l
e
s
s
o
n
I
d
!
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
F
o
o
t
e
r
 
*
/
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
4
 
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
a
p
-
3
 
f
l
e
x
-
w
r
a
p
 
p
t
-
6
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
T
o
g
g
l
e
C
o
m
p
l
e
t
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
2
 
p
x
-
4
 
p
y
-
2
 
t
e
x
t
-
[
1
1
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
 
b
o
r
d
e
r
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
o
r
d
e
r
-
l
i
m
e
-
4
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
9
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
o
r
d
e
r
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
9
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
l
e
t
e
d
 
?
 
"
c
o
m
p
l
e
t
e
d
"
 
:
 
"
m
a
r
k
 
a
s
 
c
o
m
p
l
e
t
e
"
}


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
L
e
s
s
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
n
a
v
i
g
a
t
e
(
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
n
e
x
t
L
e
s
s
o
n
.
i
d
}
`
)
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
g
r
o
u
p
 
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
 
t
e
x
t
-
[
1
1
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
3
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
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
e
x
t
 
l
e
s
s
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
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
3
.
5
 
h
-
3
.
5
 
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
y
-
0
.
5
 
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
.
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
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


