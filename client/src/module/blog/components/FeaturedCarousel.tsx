
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
M
e
m
o
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
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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


 
 
C
a
l
e
n
d
a
r
,


 
 
C
l
o
c
k
,


 
 
E
y
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
 
t
y
p
e
 
{
 
B
l
o
g
P
o
s
t
,
 
B
l
o
g
C
a
t
e
g
o
r
y
 
}
 
f
r
o
m
 
"
@
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




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
:
 
R
e
c
o
r
d
<
B
l
o
g
C
a
t
e
g
o
r
y
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


 
 
C
A
R
E
E
R
_
A
D
V
I
C
E
:
 
"
C
a
r
e
e
r
 
A
d
v
i
c
e
"
,


 
 
I
N
T
E
R
V
I
E
W
_
T
I
P
S
:
 
"
I
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
"
,


 
 
S
A
L
A
R
Y
_
G
U
I
D
E
:
 
"
S
a
l
a
r
y
 
G
u
i
d
e
"
,


 
 
I
N
D
U
S
T
R
Y
_
I
N
S
I
G
H
T
S
:
 
"
I
n
d
u
s
t
r
y
 
I
n
s
i
g
h
t
s
"
,


 
 
R
E
S
U
M
E
_
T
I
P
S
:
 
"
R
e
s
u
m
e
 
T
i
p
s
"
,


 
 
T
E
C
H
_
T
R
E
N
D
S
:
 
"
T
e
c
h
 
T
r
e
n
d
s
"
,


}
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<


 
 
B
l
o
g
C
a
t
e
g
o
r
y
,


 
 
{
 
b
g
:
 
s
t
r
i
n
g
;
 
t
e
x
t
:
 
s
t
r
i
n
g
 
}


>
 
=
 
{


 
 
C
A
R
E
E
R
_
A
D
V
I
C
E
:
 
{


 
 
 
 
b
g
:
 
"
b
g
-
b
l
u
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
b
l
u
e
-
9
0
0
/
4
0
"
,


 
 
 
 
t
e
x
t
:
 
"
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
b
l
u
e
-
3
0
0
"
,


 
 
}
,


 
 
I
N
T
E
R
V
I
E
W
_
T
I
P
S
:
 
{


 
 
 
 
b
g
:
 
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
e
m
e
r
a
l
d
-
9
0
0
/
4
0
"
,


 
 
 
 
t
e
x
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
e
m
e
r
a
l
d
-
3
0
0
"
,


 
 
}
,


 
 
S
A
L
A
R
Y
_
G
U
I
D
E
:
 
{


 
 
 
 
b
g
:
 
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
4
0
"
,


 
 
 
 
t
e
x
t
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
3
0
0
"
,


 
 
}
,


 
 
I
N
D
U
S
T
R
Y
_
I
N
S
I
G
H
T
S
:
 
{


 
 
 
 
b
g
:
 
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
4
0
"
,


 
 
 
 
t
e
x
t
:
 
"
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
"
,


 
 
}
,


 
 
R
E
S
U
M
E
_
T
I
P
S
:
 
{


 
 
 
 
b
g
:
 
"
b
g
-
r
o
s
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
r
o
s
e
-
9
0
0
/
4
0
"
,


 
 
 
 
t
e
x
t
:
 
"
t
e
x
t
-
r
o
s
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
r
o
s
e
-
3
0
0
"
,


 
 
}
,


 
 
T
E
C
H
_
T
R
E
N
D
S
:
 
{


 
 
 
 
b
g
:
 
"
b
g
-
c
y
a
n
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
c
y
a
n
-
9
0
0
/
4
0
"
,


 
 
 
 
t
e
x
t
:
 
"
t
e
x
t
-
c
y
a
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
c
y
a
n
-
3
0
0
"
,


 
 
}
,


}
;




c
o
n
s
t
 
G
R
A
D
I
E
N
T
S
 
=
 
[


 
 
"
f
r
o
m
-
b
l
u
e
-
6
0
0
 
t
o
-
i
n
d
i
g
o
-
7
0
0
"
,


 
 
"
f
r
o
m
-
v
i
o
l
e
t
-
6
0
0
 
t
o
-
p
u
r
p
l
e
-
7
0
0
"
,


 
 
"
f
r
o
m
-
c
y
a
n
-
6
0
0
 
t
o
-
b
l
u
e
-
7
0
0
"
,


 
 
"
f
r
o
m
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
 
t
o
-
t
e
a
l
-
7
0
0
"
,


]
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
d
a
t
e
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
 
n
e
w
 
D
a
t
e
(
d
a
t
e
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
,


 
 
 
 
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


 
 
}
)
;


}




i
n
t
e
r
f
a
c
e
 
F
e
a
t
u
r
e
d
C
a
r
o
u
s
e
l
P
r
o
p
s
 
{


 
 
p
o
s
t
s
:
 
B
l
o
g
P
o
s
t
[
]
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
 
F
e
a
t
u
r
e
d
C
a
r
o
u
s
e
l
(
{


 
 
p
o
s
t
s
,


}
:
 
F
e
a
t
u
r
e
d
C
a
r
o
u
s
e
l
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
f
e
a
t
u
r
e
d
P
o
s
t
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
 
p
o
s
t
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
p
)
 
=
>
 
p
.
i
s
F
e
a
t
u
r
e
d
)
,


 
 
 
 
[
p
o
s
t
s
]


 
 
)
;




 
 
c
o
n
s
t
 
[
c
u
r
r
e
n
t
,
 
s
e
t
C
u
r
r
e
n
t
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




 
 
i
f
 
(
!
f
e
a
t
u
r
e
d
P
o
s
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
 
a
c
t
i
v
e
P
o
s
t
 
=
 
f
e
a
t
u
r
e
d
P
o
s
t
s
[
c
u
r
r
e
n
t
]
;


 
 
c
o
n
s
t
 
c
a
t
e
g
o
r
y
S
t
y
l
e
 
=


 
 
 
 
C
A
T
E
G
O
R
Y
_
C
O
L
O
R
S
[
a
c
t
i
v
e
P
o
s
t
.
c
a
t
e
g
o
r
y
]
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
S
l
i
d
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
C
u
r
r
e
n
t
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
p
r
e
v
 
=
=
=
 
f
e
a
t
u
r
e
d
P
o
s
t
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
 
0
 
:
 
p
r
e
v
 
+
 
1


 
 
 
 
)
;


 
 
}
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
S
l
i
d
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
C
u
r
r
e
n
t
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
p
r
e
v
 
=
=
=
 
0
 
?
 
f
e
a
t
u
r
e
d
P
o
s
t
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
 
:
 
p
r
e
v
 
-
 
1


 
 
 
 
)
;


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
5
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
K
i
c
k
e
r
 
—
 
l
i
m
e
 
d
o
t
 
+
 
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
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
m
b
-
3
"
>
f
e
a
t
u
r
e
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
l
a
c
k
 
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


 
 
 
 
 
 
 
 
 
 
 
 
F
e
a
t
u
r
e
d
 
A
r
t
i
c
l
e
s


 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
H
a
n
d
-
p
i
c
k
e
d
 
i
n
s
i
g
h
t
s
 
a
n
d
 
t
r
e
n
d
i
n
g
 
r
e
a
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




 
 
 
 
 
 
 
 
{
f
e
a
t
u
r
e
d
P
o
s
t
s
.
l
e
n
g
t
h
 
>
 
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
h
i
d
d
e
n
 
s
m
:
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
p
r
e
v
S
l
i
d
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
 
h
-
1
0
 
w
-
1
0
 
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
l
i
m
e
-
4
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
h
-
4
 
w
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
n
e
x
t
S
l
i
d
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
 
h
-
1
0
 
w
-
1
0
 
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
l
i
m
e
-
4
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
4
 
w
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
r
e
l
a
t
i
v
e
 
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
"
>


 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
c
t
i
v
e
P
o
s
t
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
,
 
x
:
 
3
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
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
x
:
 
-
3
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
b
l
o
g
/
$
{
a
c
t
i
v
e
P
o
s
t
.
s
l
u
g
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
g
r
o
u
p
 
g
r
i
d
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
I
m
a
g
e
 
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
7
2
 
m
d
:
h
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
P
o
s
t
.
f
e
a
t
u
r
e
d
I
m
a
g
e
 
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
a
c
t
i
v
e
P
o
s
t
.
f
e
a
t
u
r
e
d
I
m
a
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
a
c
t
i
v
e
P
o
s
t
.
t
i
t
l
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
h
-
f
u
l
l
 
w
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
s
c
a
l
e
-
1
0
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
 
d
u
r
a
t
i
o
n
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
{
`
h
-
f
u
l
l
 
w
-
f
u
l
l
 
b
g
-
g
r
a
d
i
e
n
t
-
t
o
-
b
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
R
A
D
I
E
N
T
S
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
P
o
s
t
.
i
d
 
%
 
G
R
A
D
I
E
N
T
S
.
l
e
n
g
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
b
g
-
b
l
a
c
k
/
1
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
e
n
t
 
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
 
f
l
e
x
-
c
o
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
 
p
-
8
 
m
d
:
p
-
1
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
m
b
-
5
 
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
 
w
-
f
i
t
 
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
x
-
3
 
p
y
-
1
 
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
s
e
m
i
b
o
l
d
 
$
{
c
a
t
e
g
o
r
y
S
t
y
l
e
.
b
g
}
 
$
{
c
a
t
e
g
o
r
y
S
t
y
l
e
.
t
e
x
t
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
[
a
c
t
i
v
e
P
o
s
t
.
c
a
t
e
g
o
r
y
]
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
3
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
4
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
P
o
s
t
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
m
t
-
5
 
t
e
x
t
-
b
a
s
e
 
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
i
n
e
-
c
l
a
m
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
P
o
s
t
.
e
x
c
e
r
p
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
e
t
a
 
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
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
P
o
s
t
.
a
u
t
h
o
r
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
h
-
4
 
w
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
P
o
s
t
.
p
u
b
l
i
s
h
e
d
A
t
 
?
?


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
P
o
s
t
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
h
-
4
 
w
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
P
o
s
t
.
r
e
a
d
i
n
g
T
i
m
e
}
 
m
i
n
 
r
e
a
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
4
 
w
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
P
o
s
t
.
v
i
e
w
C
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
T
A
 
—
 
h
o
m
e
p
a
g
e
 
m
o
n
o
 
s
t
y
l
e
 
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
8
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
g
a
p
-
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
a
d
 
a
r
t
i
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
3
.
5
 
w
-
3
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
1
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
d
i
v
>


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
 
D
o
t
s
 
*
/
}


 
 
 
 
 
 
{
f
e
a
t
u
r
e
d
P
o
s
t
s
.
l
e
n
g
t
h
 
>
 
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
m
t
-
5
 
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
f
e
a
t
u
r
e
d
P
o
s
t
s
.
m
a
p
(
(
p
o
s
t
,
 
i
d
x
)
 
=
>
 
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
p
o
s
t
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
C
u
r
r
e
n
t
(
i
d
x
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
h
-
2
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
3
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
x
 
=
=
=
 
c
u
r
r
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
8
 
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
 
"
w
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
3
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
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
)
}


 
 
 
 
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


 
 
)
;


}
