
i
m
p
o
r
t
 
{
 
S
p
a
r
k
l
e
s
,
 
C
l
o
c
k
,
 
H
a
r
d
D
r
i
v
e
,
 
E
y
e
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
 
R
e
f
r
e
s
h
C
w
,
 
L
o
a
d
e
r
2
 
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
 
t
y
p
e
 
{
 
D
s
a
C
o
d
e
R
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
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
r
e
v
i
e
w
:
 
D
s
a
C
o
d
e
R
e
v
i
e
w
 
|
 
n
u
l
l
;


 
 
i
s
L
o
a
d
i
n
g
:
 
b
o
o
l
e
a
n
;


 
 
e
r
r
o
r
:
 
u
n
k
n
o
w
n
;


 
 
o
n
R
e
q
u
e
s
t
R
e
v
i
e
w
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
h
a
s
S
u
b
m
i
s
s
i
o
n
:
 
b
o
o
l
e
a
n
;


}




c
o
n
s
t
 
S
C
O
R
E
_
C
O
L
O
R
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


 
 
l
o
w
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
r
e
d
-
4
0
0
"
,


 
 
m
i
d
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
"
,


 
 
g
o
o
d
:
 
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
,


 
 
g
r
e
a
t
:
 
"
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
 
s
c
o
r
e
C
o
l
o
r
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
c
o
r
e
 
<
=
 
3
)
 
r
e
t
u
r
n
 
S
C
O
R
E
_
C
O
L
O
R
.
l
o
w
;


 
 
i
f
 
(
s
c
o
r
e
 
<
=
 
5
)
 
r
e
t
u
r
n
 
S
C
O
R
E
_
C
O
L
O
R
.
m
i
d
;


 
 
i
f
 
(
s
c
o
r
e
 
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
 
S
C
O
R
E
_
C
O
L
O
R
.
g
o
o
d
;


 
 
r
e
t
u
r
n
 
S
C
O
R
E
_
C
O
L
O
R
.
g
r
e
a
t
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
 
s
c
o
r
e
L
a
b
e
l
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
c
o
r
e
 
<
=
 
3
)
 
r
e
t
u
r
n
 
"
N
e
e
d
s
 
w
o
r
k
"
;


 
 
i
f
 
(
s
c
o
r
e
 
<
=
 
5
)
 
r
e
t
u
r
n
 
"
D
e
c
e
n
t
"
;


 
 
i
f
 
(
s
c
o
r
e
 
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
 
"
G
o
o
d
"
;


 
 
r
e
t
u
r
n
 
"
E
x
c
e
l
l
e
n
t
"
;


}




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
 
D
s
a
A
i
R
e
v
i
e
w
P
a
n
e
l
(
{
 
r
e
v
i
e
w
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
,
 
o
n
R
e
q
u
e
s
t
R
e
v
i
e
w
,
 
h
a
s
S
u
b
m
i
s
s
i
o
n
 
}
:
 
P
r
o
p
s
)
 
{


 
 
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
c
o
l
 
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


 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
8
 
h
-
8
 
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
5
0
0
 
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
A
n
a
l
y
z
i
n
g
 
y
o
u
r
 
c
o
d
e
.
.
.
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
5
0
0
"
>
T
h
i
s
 
m
a
y
 
t
a
k
e
 
a
 
f
e
w
 
s
e
c
o
n
d
s
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
)
 
{


 
 
 
 
c
o
n
s
t
 
e
r
r
M
s
g
 
=
 
(
e
r
r
o
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
 
(
e
r
r
o
r
 
i
n
s
t
a
n
c
e
o
f
 
E
r
r
o
r
 
?
 
e
r
r
o
r
.
m
e
s
s
a
g
e
 
:
 
"
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
"
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
c
o
l
 
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
 
g
a
p
-
3
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
6
 
h
-
6
 
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
r
e
d
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
r
e
d
-
4
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
e
r
r
M
s
g
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
s
m
"
 
o
n
C
l
i
c
k
=
{
o
n
R
e
q
u
e
s
t
R
e
v
i
e
w
}
>


 
 
 
 
 
 
 
 
 
 
<
R
e
f
r
e
s
h
C
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
 
m
r
-
1
.
5
"
 
/
>
 
R
e
t
r
y


 
 
 
 
 
 
 
 
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


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
!
r
e
v
i
e
w
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
c
o
l
 
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
 
g
a
p
-
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
w
-
1
2
 
h
-
1
2
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
S
p
a
r
k
l
e
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
5
 
h
-
5
 
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
A
I
 
C
o
d
e
 
R
e
v
i
e
w


 
 
 
 
 
 
 
 
 
 
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
a
x
-
w
-
[
2
4
0
p
x
]
 
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
a
s
S
u
b
m
i
s
s
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
G
e
t
 
A
I
 
f
e
e
d
b
a
c
k
 
o
n
 
y
o
u
r
 
s
o
l
u
t
i
o
n
 
—
 
c
o
m
p
l
e
x
i
t
y
,
 
r
e
a
d
a
b
i
l
i
t
y
,
 
e
d
g
e
 
c
a
s
e
s
,
 
a
n
d
 
s
u
g
g
e
s
t
i
o
n
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
R
u
n
 
y
o
u
r
 
c
o
d
e
 
f
i
r
s
t
,
 
t
h
e
n
 
r
e
q
u
e
s
t
 
a
n
 
A
I
 
r
e
v
i
e
w
 
o
f
 
y
o
u
r
 
s
u
b
m
i
s
s
i
o
n
.
"


 
 
 
 
 
 
 
 
 
 
 
 
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
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
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
s
m
"


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
R
e
q
u
e
s
t
R
e
v
i
e
w
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
h
a
s
S
u
b
m
i
s
s
i
o
n
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
p
a
r
k
l
e
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
 
m
r
-
1
.
5
"
 
/
>
 
G
e
t
 
A
I
 
R
e
v
i
e
w


 
 
 
 
 
 
 
 
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


 
 
 
 
)
;


 
 
}




 
 
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
-
3
 
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
/
*
 
C
o
m
p
l
e
x
i
t
y
 
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
2
 
g
a
p
-
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
l
g
 
p
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
 
g
a
p
-
1
.
5
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
o
c
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
"
>
t
i
m
e
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
 
l
e
a
d
i
n
g
-
s
n
u
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
i
e
w
.
t
i
m
e
C
o
m
p
l
e
x
i
t
y
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
l
g
 
p
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
 
g
a
p
-
1
.
5
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
H
a
r
d
D
r
i
v
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
"
>
s
p
a
c
e
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
 
l
e
a
d
i
n
g
-
s
n
u
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
i
e
w
.
s
p
a
c
e
C
o
m
p
l
e
x
i
t
y
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




 
 
 
 
 
 
{
/
*
 
R
e
a
d
a
b
i
l
i
t
y
 
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
l
g
 
p
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
 
m
b
-
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
"
>
r
e
a
d
a
b
i
l
i
t
y
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
 
$
{
s
c
o
r
e
C
o
l
o
r
(
r
e
v
i
e
w
.
r
e
a
d
a
b
i
l
i
t
y
.
s
c
o
r
e
)
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
i
e
w
.
r
e
a
d
a
b
i
l
i
t
y
.
s
c
o
r
e
}
/
1
0


 
 
 
 
 
 
 
 
 
 
 
 
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
r
 
$
{
s
c
o
r
e
C
o
l
o
r
(
r
e
v
i
e
w
.
r
e
a
d
a
b
i
l
i
t
y
.
s
c
o
r
e
)
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
c
o
r
e
L
a
b
e
l
(
r
e
v
i
e
w
.
r
e
a
d
a
b
i
l
i
t
y
.
s
c
o
r
e
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
/
d
i
v
>


 
 
 
 
 
 
 
 
{
/
*
 
S
c
o
r
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
h
-
1
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
 
m
b
-
2
.
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
h
-
f
u
l
l
 
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
 
d
u
r
a
t
i
o
n
-
5
0
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
 
w
i
d
t
h
:
 
`
$
{
(
r
e
v
i
e
w
.
r
e
a
d
a
b
i
l
i
t
y
.
s
c
o
r
e
 
/
 
1
0
)
 
*
 
1
0
0
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
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
r
e
v
i
e
w
.
r
e
a
d
a
b
i
l
i
t
y
.
f
e
e
d
b
a
c
k
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
/
*
 
E
d
g
e
 
C
a
s
e
s
 
*
/
}


 
 
 
 
 
 
{
r
e
v
i
e
w
.
e
d
g
e
C
a
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
l
g
 
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
5
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
x
-
3
 
p
y
-
2
 
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
1
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
 
g
a
p
-
1
.
5
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
d
g
e
 
c
a
s
e
s
 
(
{
r
e
v
i
e
w
.
e
d
g
e
C
a
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
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
e
v
i
e
w
.
e
d
g
e
C
a
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
c
,
 
i
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
p
x
-
3
 
p
y
-
2
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
S
u
g
g
e
s
t
i
o
n
s
 
*
/
}


 
 
 
 
 
 
{
r
e
v
i
e
w
.
s
u
g
g
e
s
t
i
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
l
g
 
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
5
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
x
-
3
 
p
y
-
2
 
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
1
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
 
g
a
p
-
1
.
5
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
g
g
e
s
t
i
o
n
s
 
(
{
r
e
v
i
e
w
.
s
u
g
g
e
s
t
i
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
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
e
v
i
e
w
.
s
u
g
g
e
s
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
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
p
x
-
3
 
p
y
-
2
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
R
e
-
r
e
v
i
e
w
 
b
u
t
t
o
n
 
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
c
e
n
t
e
r
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"
 
s
i
z
e
=
"
s
m
"
 
o
n
C
l
i
c
k
=
{
o
n
R
e
q
u
e
s
t
R
e
v
i
e
w
}
>


 
 
 
 
 
 
 
 
 
 
<
R
e
f
r
e
s
h
C
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
 
m
r
-
1
.
5
"
 
/
>
 
R
e
-
a
n
a
l
y
z
e


 
 
 
 
 
 
 
 
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
/
d
i
v
>


 
 
)
;


}


