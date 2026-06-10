
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


 
 
U
s
e
r
s
,


 
 
T
r
e
n
d
i
n
g
U
p
,


 
 
A
w
a
r
d
,


 
 
S
h
i
e
l
d
C
h
e
c
k
,


 
 
A
r
r
o
w
R
i
g
h
t
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


 
 
P
l
u
s
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


 
 
X
C
i
r
c
l
e
,


 
 
C
l
o
c
k
3
,


 
 
C
i
r
c
l
e
D
a
s
h
e
d
,


 
 
U
s
e
r
C
h
e
c
k
,


 
 
M
i
n
u
s
C
i
r
c
l
e
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
 
E
r
r
o
r
B
o
u
n
d
a
r
y
 
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
E
r
r
o
r
B
o
u
n
d
a
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
 
K
i
c
k
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
K
i
c
k
e
r
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
 
D
a
s
h
b
o
a
r
d
D
a
t
a
 
{


 
 
t
o
t
a
l
J
o
b
s
:
 
n
u
m
b
e
r
;


 
 
a
c
t
i
v
e
J
o
b
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
A
p
p
l
i
c
a
t
i
o
n
s
:
 
n
u
m
b
e
r
;


 
 
h
i
r
e
d
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
u
s
B
r
e
a
k
d
o
w
n
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
 
n
u
m
b
e
r
>
;


 
 
t
o
p
V
e
r
i
f
i
e
d
S
k
i
l
l
s
:
 
{
 
s
k
i
l
l
N
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
u
n
t
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
r
e
c
e
n
t
A
p
p
l
i
c
a
t
i
o
n
s
:
 
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


 
 
 
 
s
t
a
t
u
s
:
 
s
t
r
i
n
g
;


 
 
 
 
c
r
e
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


 
 
 
 
s
t
u
d
e
n
t
:
 
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
 
e
m
a
i
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


 
 
 
 
j
o
b
:
 
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
 
}
;


 
 
}
[
]
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
 
R
e
c
r
u
i
t
e
r
D
a
s
h
b
o
a
r
d
I
n
n
e
r
(
)
 
{


 
 
c
o
n
s
t
 
{
 
u
s
e
r
 
}
 
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
)
;


 
 
c
o
n
s
t
 
[
d
a
t
a
,
 
s
e
t
D
a
t
a
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
D
a
s
h
b
o
a
r
d
D
a
t
a
 
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
 
f
e
t
c
h
D
a
s
h
b
o
a
r
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
a
s
y
n
c
 
(
)
 
=
>
 
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


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
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
"
/
r
e
c
r
u
i
t
e
r
/
d
a
s
h
b
o
a
r
d
"
)
;


 
 
 
 
 
 
s
e
t
D
a
t
a
(
r
e
s
.
d
a
t
a
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
s
e
t
D
a
t
a
(
p
r
e
v
 
=
>
 
p
r
e
v
 
?
?
 
n
u
l
l
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


 
 
 
 
}


 
 
}
,
 
[
]
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


 
 
 
 
f
e
t
c
h
D
a
s
h
b
o
a
r
d
(
)
;


 
 
}
,
 
[
f
e
t
c
h
D
a
s
h
b
o
a
r
d
]
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


 
 
 
 
c
o
n
s
t
 
o
n
F
o
c
u
s
 
=
 
(
)
 
=
>
 
f
e
t
c
h
D
a
s
h
b
o
a
r
d
(
)
;


 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
f
o
c
u
s
"
,
 
o
n
F
o
c
u
s
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
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
f
o
c
u
s
"
,
 
o
n
F
o
c
u
s
)
;


 
 
}
,
 
[
f
e
t
c
h
D
a
s
h
b
o
a
r
d
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
 
r
e
t
u
r
n
 
<
D
a
s
h
b
o
a
r
d
S
k
e
l
e
t
o
n
 
/
>
;




 
 
i
f
 
(
!
d
a
t
a
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
y
-
2
0
"
>


 
 
 
 
 
 
 
 
F
a
i
l
e
d
 
t
o
 
l
o
a
d
 
d
a
s
h
b
o
a
r
d


 
 
 
 
 
 
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
 
s
t
a
t
s
 
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
t
o
t
a
l
 
j
o
b
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
.
t
o
t
a
l
J
o
b
s
,
 
i
c
o
n
:
 
B
r
i
e
f
c
a
s
e
 
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
a
c
t
i
v
e
 
j
o
b
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
.
a
c
t
i
v
e
J
o
b
s
,
 
i
c
o
n
:
 
T
r
e
n
d
i
n
g
U
p
 
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
a
p
p
l
i
c
a
n
t
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
.
t
o
t
a
l
A
p
p
l
i
c
a
t
i
o
n
s
,
 
i
c
o
n
:
 
U
s
e
r
s
 
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
h
i
r
e
d
"
,
 
v
a
l
u
e
:
 
d
a
t
a
.
h
i
r
e
d
C
o
u
n
t
,
 
i
c
o
n
:
 
A
w
a
r
d
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
f
i
r
s
t
N
a
m
e
 
=
 
u
s
e
r
?
.
c
o
m
p
a
n
y
 
|
|
 
u
s
e
r
?
.
n
a
m
e
?
.
s
p
l
i
t
(
"
 
"
)
[
0
]
 
|
|
 
"
R
e
c
r
u
i
t
e
r
"
;


 
 
c
o
n
s
t
 
t
o
p
S
k
i
l
l
P
e
a
k
 
=
 
d
a
t
a
.
t
o
p
V
e
r
i
f
i
e
d
S
k
i
l
l
s
[
0
]
?
.
c
o
u
n
t
 
|
|
 
1
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
R
e
c
r
u
i
t
e
r
 
D
a
s
h
b
o
a
r
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




 
 
 
 
 
 
{
/
*
 
F
a
i
n
t
 
v
e
r
t
i
c
a
l
 
r
u
l
e
 
p
a
t
t
e
r
n
,
 
s
a
m
e
 
a
s
 
s
t
u
d
e
n
t
 
e
d
i
t
o
r
i
a
l
 
p
a
g
e
s
 
*
/
}


 
 
 
 
 
 
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
6
 
m
b
-
1
0
 
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
 
p
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
K
i
c
k
e
r
>
r
e
c
r
u
i
t
e
r
 
/
 
d
a
s
h
b
o
a
r
d
<
/
K
i
c
k
e
r
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
m
t
-
4
 
t
e
x
t
-
4
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
5
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
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
i
r
i
n
g
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
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
o
v
e
r
v
i
e
w
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
X
:
 
0
 
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
 
s
c
a
l
e
X
:
 
1
 
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
7
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
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
3
 
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
 
m
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
e
l
c
o
m
e
 
b
a
c
k
,
 
{
f
i
r
s
t
N
a
m
e
}
.
 
T
r
a
c
k
 
y
o
u
r
 
o
p
e
n
 
r
o
l
e
s
,
 
w
a
t
c
h
 
y
o
u
r
 
p
i
p
e
l
i
n
e
,
 
a
n
d
 
m
e
e
t
 
t
h
e
 
c
a
n
d
i
d
a
t
e
s
 
c
o
m
i
n
g
 
i
n
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
m
d
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
f
e
t
c
h
D
a
s
h
b
o
a
r
d
}
 
a
r
i
a
-
l
a
b
e
l
=
"
R
e
f
r
e
s
h
 
d
a
s
h
b
o
a
r
d
"
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
m
d
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
r
e
c
r
u
i
t
e
r
s
/
j
o
b
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
y
 
j
o
b
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
d
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
r
e
c
r
u
i
t
e
r
s
/
j
o
b
s
/
c
r
e
a
t
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
P
l
u
s
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
a
 
j
o
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
t
a
t
s
 
r
o
w
 
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
4
 
g
a
p
-
3
 
m
b
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
s
.
m
a
p
(
(
s
t
a
t
,
 
i
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
a
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
0
.
1
 
+
 
i
 
*
 
0
.
0
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
r
e
l
a
t
i
v
e
 
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
w
h
i
t
e
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
 
m
b
-
3
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
s
t
a
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
a
t
.
i
c
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
4
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
s
t
o
n
e
-
5
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
)
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
 
P
i
p
e
l
i
n
e
 
+
 
S
k
i
l
l
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
5
 
g
a
p
-
4
 
m
b
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
p
p
l
i
c
a
t
i
o
n
 
S
t
a
t
u
s
 
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
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
5
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
p
p
l
i
c
a
t
i
o
n
 
s
t
a
t
u
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




 
 
 
 
 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
k
e
y
s
(
d
a
t
a
.
s
t
a
t
u
s
B
r
e
a
k
d
o
w
n
)
.
l
e
n
g
t
h
 
=
=
=
 
0
 
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
N
o
 
a
p
p
l
i
c
a
t
i
o
n
s
 
i
n
 
t
h
e
 
p
i
p
e
l
i
n
e
 
y
e
t
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
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
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
d
a
t
a
.
s
t
a
t
u
s
B
r
e
a
k
d
o
w
n
)
.
m
a
p
(
(
[
s
t
a
t
u
s
,
 
c
o
u
n
t
]
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
s
t
a
t
u
s
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
 
p
y
-
3
 
f
i
r
s
t
:
p
t
-
0
 
l
a
s
t
:
p
b
-
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
2
.
5
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
n
d
e
r
S
t
a
t
u
s
I
c
o
n
(
s
t
a
t
u
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
u
m
a
n
i
z
e
S
t
a
t
u
s
(
s
t
a
t
u
s
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
s
t
o
n
e
-
5
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
 
s
h
r
i
n
k
-
0
 
m
l
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
u
n
t
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
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
o
p
 
V
e
r
i
f
i
e
d
 
S
k
i
l
l
s
 
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
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
5
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
 
v
e
r
i
f
i
e
d
 
s
k
i
l
l
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




 
 
 
 
 
 
 
 
 
 
 
 
{
!
d
a
t
a
.
t
o
p
V
e
r
i
f
i
e
d
S
k
i
l
l
s
 
|
|
 
d
a
t
a
.
t
o
p
V
e
r
i
f
i
e
d
S
k
i
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
 
=
=
=
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
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
4
 
h
-
4
 
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
p
>
N
o
 
v
e
r
i
f
i
e
d
 
s
k
i
l
l
s
 
i
n
 
y
o
u
r
 
a
p
p
l
i
c
a
n
t
 
p
o
o
l
 
y
e
t
.
 
C
a
n
d
i
d
a
t
e
s
 
w
i
l
l
 
s
h
o
w
 
u
p
 
h
e
r
e
 
a
s
 
t
h
e
y
 
p
a
s
s
 
s
k
i
l
l
 
t
e
s
t
s
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
t
o
p
V
e
r
i
f
i
e
d
S
k
i
l
l
s
.
m
a
p
(
(
s
k
i
l
l
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
s
k
i
l
l
.
s
k
i
l
l
N
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
s
t
o
n
e
-
4
0
0
 
w
-
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
1
.
5
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
s
k
i
l
l
.
s
k
i
l
l
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
 
s
h
r
i
n
k
-
0
 
m
l
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
k
i
l
l
.
c
o
u
n
t
}
 
v
e
r
i
f
i
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
r
e
l
a
t
i
v
e
 
h
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
o
u
n
d
e
d
-
s
m
"
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
 
s
c
a
l
e
X
:
 
0
 
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
 
s
c
a
l
e
X
:
 
1
 
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
6
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
 
+
 
i
 
*
 
0
.
0
5
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
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
y
-
0
 
l
e
f
t
-
0
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
r
o
u
n
d
e
d
-
s
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
 
w
i
d
t
h
:
 
`
$
{
M
a
t
h
.
m
i
n
(
1
0
0
,
 
(
s
k
i
l
l
.
c
o
u
n
t
 
/
 
t
o
p
S
k
i
l
l
P
e
a
k
)
 
*
 
1
0
0
)
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
/
d
i
v
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
c
e
n
t
 
A
p
p
l
i
c
a
t
i
o
n
s
 
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
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
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
m
b
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
4
 
m
b
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
r
e
c
e
n
t
 
a
p
p
l
i
c
a
t
i
o
n
s
<
/
K
i
c
k
e
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
h
o
 
j
u
s
t
 
a
p
p
l
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
r
e
c
r
u
i
t
e
r
s
/
j
o
b
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
 
a
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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




 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
r
e
c
e
n
t
A
p
p
l
i
c
a
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
 
=
=
=
 
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
 
b
o
r
d
e
r
-
t
-
0
 
r
o
u
n
d
e
d
-
b
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
 
p
x
-
6
 
p
y
-
1
6
 
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
0
 
h
-
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
5
0
0
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
a
p
p
l
i
c
a
t
i
o
n
s
 
y
e
t
.
 
P
o
s
t
 
a
 
r
o
l
e
 
a
n
d
 
c
a
n
d
i
d
a
t
e
s
 
w
i
l
l
 
l
a
n
d
 
h
e
r
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
i
z
e
=
"
m
d
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
r
e
c
r
u
i
t
e
r
s
/
j
o
b
s
/
c
r
e
a
t
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
P
l
u
s
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
a
 
j
o
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
2
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
1
0
 
b
o
r
d
e
r
-
l
 
b
o
r
d
e
r
-
r
 
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
 
r
o
u
n
d
e
d
-
b
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
a
.
r
e
c
e
n
t
A
p
p
l
i
c
a
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
a
p
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
p
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
0
.
4
5
 
+
 
i
 
*
 
0
.
0
3
 
}
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
`
/
r
e
c
r
u
i
t
e
r
s
/
a
p
p
l
i
c
a
t
i
o
n
s
/
$
{
a
p
p
.
i
d
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
4
 
p
x
-
5
 
p
y
-
4
 
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
s
t
o
n
e
-
9
5
0
/
4
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
9
 
h
-
9
 
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
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
e
t
I
n
i
t
i
a
l
s
(
a
p
p
.
s
t
u
d
e
n
t
.
n
a
m
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
u
n
d
e
r
l
i
n
e
 
d
e
c
o
r
a
t
i
o
n
-
l
i
m
e
-
4
0
0
 
d
e
c
o
r
a
t
i
o
n
-
2
 
u
n
d
e
r
l
i
n
e
-
o
f
f
s
e
t
-
4
 
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
a
p
p
.
s
t
u
d
e
n
t
.
n
a
m
e
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
5
0
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
a
p
p
.
j
o
b
.
t
i
t
l
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
4
 
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
i
d
d
e
n
 
s
m
:
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
n
d
e
r
S
t
a
t
u
s
I
c
o
n
(
a
p
p
.
s
t
a
t
u
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
u
m
a
n
i
z
e
S
t
a
t
u
s
(
a
p
p
.
s
t
a
t
u
s
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
a
p
p
.
c
r
e
a
t
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
m
o
t
i
o
n
.
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
 
D
a
s
h
b
o
a
r
d
S
k
e
l
e
t
o
n
(
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
6
 
m
b
-
1
0
 
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
 
p
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
3
 
w
-
3
2
 
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
h
-
8
 
w
-
6
4
 
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
h
-
4
 
w
-
4
8
 
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
2
 
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
4
 
g
a
p
-
3
 
m
b
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
4
)
]
.
m
a
p
(
(
_
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
5
 
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
3
 
w
-
2
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
h
-
8
 
w
-
1
6
 
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
5
 
g
a
p
-
4
 
m
b
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
h
-
3
 
w
-
3
2
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
4
)
]
.
m
a
p
(
(
_
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
 
p
y
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
h
-
3
 
w
-
2
4
 
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
 
c
l
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
3
 
w
-
6
 
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
h
-
3
 
w
-
3
2
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
3
)
]
.
m
a
p
(
(
_
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
s
p
a
c
e
-
y
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
h
-
3
 
w
-
2
8
 
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
h
-
3
 
w
-
1
6
 
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
 
c
l
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
s
m
 
w
-
f
u
l
l
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
s
p
a
c
e
-
y
-
4
 
m
b
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
h
-
3
 
w
-
3
2
 
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
h
-
5
 
w
-
4
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
4
)
]
.
m
a
p
(
(
_
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
4
 
p
x
-
5
 
p
y
-
4
 
b
o
r
d
e
r
-
l
 
b
o
r
d
e
r
-
r
 
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
9
 
h
-
9
 
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
m
d
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
s
p
a
c
e
-
y
-
1
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
3
 
w
-
3
2
 
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
h
-
2
.
5
 
w
-
2
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
3
 
w
-
1
6
 
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
 
g
e
t
I
n
i
t
i
a
l
s
(
n
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
!
n
a
m
e
?
.
t
r
i
m
(
)
)
 
{


 
 
 
 
r
e
t
u
r
n
 
'
?
'
;


 
 
}




 
 
r
e
t
u
r
n
 
n
a
m
e


 
 
 
 
.
s
p
l
i
t
(
"
 
"
)


 
 
 
 
.
m
a
p
(
(
n
)
 
=
>
 
n
[
0
]
)


 
 
 
 
.
j
o
i
n
(
"
"
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
 
h
u
m
a
n
i
z
e
S
t
a
t
u
s
(
s
t
a
t
u
s
:
 
s
t
r
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
 
s
t
a
t
u
s


 
 
 
 
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
_
/
g
,
 
"
 
"
)


 
 
 
 
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
b
\
w
/
g
,
 
(
c
)
 
=
>
 
c
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
 
{


 
 
c
o
n
s
t
 
d
 
=
 
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
;


 
 
r
e
t
u
r
n
 
d
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
"
e
n
-
U
S
"
,
 
{
 
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
 
}
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
 
R
e
c
r
u
i
t
e
r
D
a
s
h
b
o
a
r
d
(
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
E
r
r
o
r
B
o
u
n
d
a
r
y
>


 
 
 
 
 
 
<
R
e
c
r
u
i
t
e
r
D
a
s
h
b
o
a
r
d
I
n
n
e
r
 
/
>


 
 
 
 
<
/
E
r
r
o
r
B
o
u
n
d
a
r
y
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
 
g
e
t
S
t
a
t
u
s
D
o
t
(
s
t
a
t
u
s
:
 
s
t
r
i
n
g
)
 
{


 
 
s
w
i
t
c
h
 
(
s
t
a
t
u
s
)
 
{


 
 
 
 
c
a
s
e
 
"
A
P
P
L
I
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
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
;


 
 
 
 
c
a
s
e
 
"
I
N
_
P
R
O
G
R
E
S
S
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
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
5
0
0
"
;


 
 
 
 
c
a
s
e
 
"
S
H
O
R
T
L
I
S
T
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
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
;


 
 
 
 
c
a
s
e
 
"
H
I
R
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
e
m
e
r
a
l
d
-
5
0
0
"
;


 
 
 
 
c
a
s
e
 
"
R
E
J
E
C
T
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
r
e
d
-
5
0
0
"
;


 
 
 
 
c
a
s
e
 
"
W
I
T
H
D
R
A
W
N
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
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
;


 
 
 
 
d
e
f
a
u
l
t
:


 
 
 
 
 
 
r
e
t
u
r
n
 
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
 
g
e
t
S
t
a
t
u
s
I
c
o
n
(
s
t
a
t
u
s
:
 
s
t
r
i
n
g
)
 
{


 
 
s
w
i
t
c
h
 
(
s
t
a
t
u
s
)
 
{


 
 
 
 
c
a
s
e
 
"
A
P
P
L
I
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
C
i
r
c
l
e
D
a
s
h
e
d
;




 
 
 
 
c
a
s
e
 
"
I
N
_
P
R
O
G
R
E
S
S
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
C
l
o
c
k
3
;




 
 
 
 
c
a
s
e
 
"
S
H
O
R
T
L
I
S
T
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
U
s
e
r
C
h
e
c
k
;




 
 
 
 
c
a
s
e
 
"
H
I
R
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
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
;




 
 
 
 
c
a
s
e
 
"
R
E
J
E
C
T
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
X
C
i
r
c
l
e
;




 
 
 
 
c
a
s
e
 
"
W
I
T
H
D
R
A
W
N
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
M
i
n
u
s
C
i
r
c
l
e
;




 
 
 
 
d
e
f
a
u
l
t
:


 
 
 
 
 
 
r
e
t
u
r
n
 
C
i
r
c
l
e
D
a
s
h
e
d
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
 
r
e
n
d
e
r
S
t
a
t
u
s
I
c
o
n
(
s
t
a
t
u
s
:
 
s
t
r
i
n
g
)
 
{


 
 
c
o
n
s
t
 
S
t
a
t
u
s
I
c
o
n
 
=
 
g
e
t
S
t
a
t
u
s
I
c
o
n
(
s
t
a
t
u
s
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
S
t
a
t
u
s
I
c
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
{
`
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
 
s
h
r
i
n
k
-
0
 
$
{
g
e
t
S
t
a
t
u
s
D
o
t
(
s
t
a
t
u
s
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
"
b
g
-
"
,
 
"
t
e
x
t
-
"
)
}
`
}


 
 
 
 
 
 
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
=
"
t
r
u
e
"


 
 
 
 
/
>


 
 
)
;


}
