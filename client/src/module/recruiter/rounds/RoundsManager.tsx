
i
m
p
o
r
t
 
R
e
a
c
t
,
 
{
 
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
 
P
l
u
s
,
 
C
h
e
v
r
o
n
D
o
w
n
,
 
C
h
e
v
r
o
n
U
p
,
 
T
r
a
s
h
2
,
 
A
r
r
o
w
U
p
,
 
A
r
r
o
w
D
o
w
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
 
D
y
n
a
m
i
c
F
i
e
l
d
B
u
i
l
d
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
D
y
n
a
m
i
c
F
i
e
l
d
B
u
i
l
d
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
 
t
y
p
e
 
{
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
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
n
t
e
r
f
a
c
e
 
R
o
u
n
d
I
n
p
u
t
 
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
:
 
s
t
r
i
n
g
;


 
 
i
n
s
t
r
u
c
t
i
o
n
s
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
v
a
t
e
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


 
 
c
u
s
t
o
m
F
i
e
l
d
s
:
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
[
]
;


 
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
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
;
 
c
r
i
t
e
r
i
o
n
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
x
S
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
 
}
[
]
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
 
R
o
u
n
d
I
t
e
m
P
r
o
p
s
 
{


 
 
r
o
u
n
d
:
 
R
o
u
n
d
I
n
p
u
t
;


 
 
i
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
i
s
F
i
r
s
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


 
 
i
s
L
a
s
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


 
 
i
s
E
x
p
a
n
d
e
d
:
 
b
o
o
l
e
a
n
;


 
 
o
n
T
o
g
g
l
e
E
x
p
a
n
d
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


 
 
o
n
M
o
v
e
U
p
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


 
 
o
n
M
o
v
e
D
o
w
n
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


 
 
o
n
R
e
m
o
v
e
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


 
 
o
n
U
p
d
a
t
e
R
o
u
n
d
:
 
(
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
R
o
u
n
d
I
n
p
u
t
>
)
 
=
>
 
v
o
i
d
;


 
 
o
n
A
d
d
C
r
i
t
e
r
i
o
n
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


 
 
o
n
U
p
d
a
t
e
C
r
i
t
e
r
i
o
n
:
 
(
c
r
i
t
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
{
 
c
r
i
t
e
r
i
o
n
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
x
S
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
 
}
>
)
 
=
>
 
v
o
i
d
;


 
 
o
n
R
e
m
o
v
e
C
r
i
t
e
r
i
o
n
:
 
(
c
r
i
t
I
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
c
o
n
s
t
 
R
o
u
n
d
I
t
e
m
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
R
o
u
n
d
I
t
e
m
(
{


 
 
r
o
u
n
d
,


 
 
i
n
d
e
x
,


 
 
i
s
F
i
r
s
t
,


 
 
i
s
L
a
s
t
,


 
 
i
s
E
x
p
a
n
d
e
d
,


 
 
o
n
T
o
g
g
l
e
E
x
p
a
n
d
,


 
 
o
n
M
o
v
e
U
p
,


 
 
o
n
M
o
v
e
D
o
w
n
,


 
 
o
n
R
e
m
o
v
e
,


 
 
o
n
U
p
d
a
t
e
R
o
u
n
d
,


 
 
o
n
A
d
d
C
r
i
t
e
r
i
o
n
,


 
 
o
n
U
p
d
a
t
e
C
r
i
t
e
r
i
o
n
,


 
 
o
n
R
e
m
o
v
e
C
r
i
t
e
r
i
o
n
,


}
:
 
R
o
u
n
d
I
t
e
m
P
r
o
p
s
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
g
r
a
y
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
g
r
a
y
-
7
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
l
g
 
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
 
p
x
-
4
 
p
y
-
3
 
b
g
-
g
r
a
y
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
g
r
a
y
-
9
5
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
1
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
g
-
g
r
a
y
-
7
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
T
o
g
g
l
e
E
x
p
a
n
d
}


 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
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
(
e
)
 
=
>
 
{
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;
 
o
n
M
o
v
e
U
p
(
)
;
 
}
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
i
s
F
i
r
s
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
t
e
x
t
-
g
r
a
y
-
4
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
a
y
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
g
r
a
y
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
g
r
a
y
-
3
0
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
o
p
a
c
i
t
y
-
3
0
"
>
<
A
r
r
o
w
U
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
 
t
y
p
e
=
"
b
u
t
t
o
n
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
(
e
)
 
=
>
 
{
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;
 
o
n
M
o
v
e
D
o
w
n
(
)
;
 
}
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
i
s
L
a
s
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
t
e
x
t
-
g
r
a
y
-
4
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
a
y
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
g
r
a
y
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
g
r
a
y
-
3
0
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
o
p
a
c
i
t
y
-
3
0
"
>
<
A
r
r
o
w
D
o
w
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
3
 
h
-
3
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
g
r
a
y
-
4
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
a
y
-
5
0
0
 
w
-
8
"
>
R
{
i
n
d
e
x
 
+
 
1
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
-
1
 
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
o
u
n
d
.
n
a
m
e
 
|
|
 
"
U
n
t
i
t
l
e
d
 
R
o
u
n
d
"
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
 
&
&
 
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
g
r
a
y
-
4
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
a
y
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
n
e
w
 
D
a
t
e
(
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
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
 
h
o
u
r
:
 
"
2
-
d
i
g
i
t
"
,
 
m
i
n
u
t
e
:
 
"
2
-
d
i
g
i
t
"
 
}
)
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
i
s
E
x
p
a
n
d
e
d
 
?
 
<
C
h
e
v
r
o
n
U
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
g
r
a
y
-
4
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
a
y
-
5
0
0
"
 
/
>
 
:
 
<
C
h
e
v
r
o
n
D
o
w
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
g
r
a
y
-
4
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
a
y
-
5
0
0
"
 
/
>
}


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
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
(
e
)
 
=
>
 
{
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;
 
o
n
R
e
m
o
v
e
(
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
p
-
1
 
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
r
e
d
-
6
0
0
"
>
<
T
r
a
s
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




 
 
 
 
 
 
{
i
s
E
x
p
a
n
d
e
d
 
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
p
-
4
 
s
p
a
c
e
-
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
t
 
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
7
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
b
l
o
c
k
 
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
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>
R
o
u
n
d
 
N
a
m
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
r
o
u
n
d
.
n
a
m
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
(
e
)
 
=
>
 
o
n
U
p
d
a
t
e
R
o
u
n
d
(
{
 
n
a
m
e
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
a
y
-
6
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
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
R
e
s
u
m
e
 
S
c
r
e
e
n
i
n
g
,
 
T
e
c
h
n
i
c
a
l
 
A
s
s
e
s
s
m
e
n
t
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
l
a
b
e
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
b
l
o
c
k
 
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
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>
D
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
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a
 
v
a
l
u
e
=
{
r
o
u
n
d
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
(
e
)
 
=
>
 
o
n
U
p
d
a
t
e
R
o
u
n
d
(
{
 
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
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
a
y
-
6
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
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
B
r
i
e
f
 
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
 
o
f
 
t
h
i
s
 
r
o
u
n
d
"
 
r
o
w
s
=
{
2
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
b
l
o
c
k
 
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
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>
I
n
s
t
r
u
c
t
i
o
n
s
 
f
o
r
 
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
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a
 
v
a
l
u
e
=
{
r
o
u
n
d
.
i
n
s
t
r
u
c
t
i
o
n
s
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
(
e
)
 
=
>
 
o
n
U
p
d
a
t
e
R
o
u
n
d
(
{
 
i
n
s
t
r
u
c
t
i
o
n
s
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
a
y
-
6
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
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
I
n
s
t
r
u
c
t
i
o
n
s
 
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
 
s
e
e
 
f
o
r
 
t
h
i
s
 
r
o
u
n
d
"
 
r
o
w
s
=
{
2
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
b
l
o
c
k
 
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
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
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
 
A
c
t
i
v
a
t
e
 
A
t
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
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
d
a
t
e
t
i
m
e
-
l
o
c
a
l
"
 
v
a
l
u
e
=
{
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
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
(
e
)
 
=
>
 
o
n
U
p
d
a
t
e
R
o
u
n
d
(
{
 
a
c
t
i
v
a
t
e
A
t
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
a
y
-
6
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
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
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
8
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
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
t
-
1
"
>
S
c
h
e
d
u
l
e
 
w
h
e
n
 
t
h
i
s
 
r
o
u
n
d
 
s
h
o
u
l
d
 
b
e
 
a
c
t
i
v
a
t
e
d
 
f
o
r
 
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
 
C
u
s
t
o
m
 
F
i
e
l
d
s
 
f
o
r
 
t
h
i
s
 
R
o
u
n
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
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
g
r
a
y
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
g
r
a
y
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
w
i
d
e
r
 
m
b
-
2
"
>
R
o
u
n
d
 
F
i
e
l
d
s
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
<
D
y
n
a
m
i
c
F
i
e
l
d
B
u
i
l
d
e
r
 
f
i
e
l
d
s
=
{
r
o
u
n
d
.
c
u
s
t
o
m
F
i
e
l
d
s
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
(
f
i
e
l
d
s
)
 
=
>
 
o
n
U
p
d
a
t
e
R
o
u
n
d
(
{
 
c
u
s
t
o
m
F
i
e
l
d
s
:
 
f
i
e
l
d
s
 
}
)
}
 
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
 
E
v
a
l
u
a
t
i
o
n
 
C
r
i
t
e
r
i
a
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
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
g
r
a
y
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
g
r
a
y
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
w
i
d
e
r
 
m
b
-
2
"
>
E
v
a
l
u
a
t
i
o
n
 
C
r
i
t
e
r
i
a
<
/
h
4
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
.
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
.
m
a
p
(
(
c
r
i
t
,
 
c
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
c
r
i
t
.
i
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
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
c
r
i
t
.
c
r
i
t
e
r
i
o
n
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
(
e
)
 
=
>
 
o
n
U
p
d
a
t
e
C
r
i
t
e
r
i
o
n
(
c
i
,
 
{
 
c
r
i
t
e
r
i
o
n
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
f
l
e
x
-
1
 
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
s
m
 
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
g
r
a
y
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
a
y
-
6
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
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
C
o
m
m
u
n
i
c
a
t
i
o
n
 
S
k
i
l
l
s
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
c
r
i
t
.
m
a
x
S
c
o
r
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
(
e
)
 
=
>
 
o
n
U
p
d
a
t
e
C
r
i
t
e
r
i
o
n
(
c
i
,
 
{
 
m
a
x
S
c
o
r
e
:
 
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
 
}
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
w
-
2
0
 
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
s
m
 
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
g
r
a
y
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
a
y
-
6
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
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
M
a
x
"
 
m
i
n
=
{
1
}
 
t
i
t
l
e
=
"
M
a
x
i
m
u
m
 
s
c
o
r
e
 
f
o
r
 
t
h
i
s
 
c
r
i
t
e
r
i
o
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
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
(
)
 
=
>
 
o
n
R
e
m
o
v
e
C
r
i
t
e
r
i
o
n
(
c
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
"
p
-
1
 
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
r
e
d
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
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
A
d
d
C
r
i
t
e
r
i
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
g
r
a
y
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
g
r
a
y
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
b
l
a
c
k
 
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
w
h
i
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
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
 
A
d
d
 
C
r
i
t
e
r
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
)
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
 
R
o
u
n
d
s
M
a
n
a
g
e
r
P
r
o
p
s
 
{


 
 
r
o
u
n
d
s
:
 
R
o
u
n
d
I
n
p
u
t
[
]
;


 
 
o
n
C
h
a
n
g
e
:
 
(
r
o
u
n
d
s
:
 
R
o
u
n
d
I
n
p
u
t
[
]
)
 
=
>
 
v
o
i
d
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
 
R
o
u
n
d
s
M
a
n
a
g
e
r
(
{
 
r
o
u
n
d
s
,
 
o
n
C
h
a
n
g
e
 
}
:
 
R
o
u
n
d
s
M
a
n
a
g
e
r
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
 
[
e
x
p
a
n
d
e
d
I
n
d
e
x
,
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
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
<
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
 
a
d
d
R
o
u
n
d
 
=
 
(
)
 
=
>
 
{


 
 
 
 
o
n
C
h
a
n
g
e
(
[
.
.
.
r
o
u
n
d
s
,
 
{


 
 
 
 
 
 
n
a
m
e
:
 
"
"
,


 
 
 
 
 
 
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
:
 
"
"
,


 
 
 
 
 
 
i
n
s
t
r
u
c
t
i
o
n
s
:
 
"
"
,


 
 
 
 
 
 
a
c
t
i
v
a
t
e
A
t
:
 
"
"
,


 
 
 
 
 
 
c
u
s
t
o
m
F
i
e
l
d
s
:
 
[
]
,


 
 
 
 
 
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
[
]
,


 
 
 
 
}
]
)
;


 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
r
o
u
n
d
s
.
l
e
n
g
t
h
)
;


 
 
}
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
R
o
u
n
d
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
R
o
u
n
d
I
n
p
u
t
>
)
 
=
>
 
{


 
 
 
 
o
n
C
h
a
n
g
e
(
r
o
u
n
d
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(
i
 
=
=
=
 
i
n
d
e
x
 
?
 
{
 
.
.
.
r
,
 
.
.
.
u
p
d
a
t
e
s
 
}
 
:
 
r
)
)
)
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
m
o
v
e
R
o
u
n
d
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
o
n
C
h
a
n
g
e
(
r
o
u
n
d
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
_
,
 
i
)
 
=
>
 
i
 
!
=
=
 
i
n
d
e
x
)
)
;


 
 
 
 
i
f
 
(
e
x
p
a
n
d
e
d
I
n
d
e
x
 
=
=
=
 
i
n
d
e
x
)
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
n
u
l
l
)
;


 
 
}
;




 
 
c
o
n
s
t
 
m
o
v
e
R
o
u
n
d
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
d
i
r
e
c
t
i
o
n
:
 
"
u
p
"
 
|
 
"
d
o
w
n
"
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
n
e
w
I
n
d
e
x
 
=
 
d
i
r
e
c
t
i
o
n
 
=
=
=
 
"
u
p
"
 
?
 
i
n
d
e
x
 
-
 
1
 
:
 
i
n
d
e
x
 
+
 
1
;


 
 
 
 
i
f
 
(
n
e
w
I
n
d
e
x
 
<
 
0
 
|
|
 
n
e
w
I
n
d
e
x
 
>
=
 
r
o
u
n
d
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
;


 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
u
n
d
s
 
=
 
[
.
.
.
r
o
u
n
d
s
]
;


 
 
 
 
[
n
e
w
R
o
u
n
d
s
[
i
n
d
e
x
]
,
 
n
e
w
R
o
u
n
d
s
[
n
e
w
I
n
d
e
x
]
]
 
=
 
[
n
e
w
R
o
u
n
d
s
[
n
e
w
I
n
d
e
x
]
!
,
 
n
e
w
R
o
u
n
d
s
[
i
n
d
e
x
]
!
]
;


 
 
 
 
o
n
C
h
a
n
g
e
(
n
e
w
R
o
u
n
d
s
)
;


 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
n
e
w
I
n
d
e
x
)
;


 
 
}
;




 
 
c
o
n
s
t
 
a
d
d
C
r
i
t
e
r
i
o
n
 
=
 
(
r
o
u
n
d
I
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
r
o
u
n
d
 
=
 
r
o
u
n
d
s
[
r
o
u
n
d
I
n
d
e
x
]
!
;


 
 
 
 
u
p
d
a
t
e
R
o
u
n
d
(
r
o
u
n
d
I
n
d
e
x
,
 
{


 
 
 
 
 
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
[
.
.
.
r
o
u
n
d
.
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
,
 
{
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,
 
c
r
i
t
e
r
i
o
n
:
 
"
"
,
 
m
a
x
S
c
o
r
e
:
 
1
0
 
}
]
,


 
 
 
 
}
)
;


 
 
}
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
C
r
i
t
e
r
i
o
n
 
=
 
(
r
o
u
n
d
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
c
r
i
t
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
{
 
c
r
i
t
e
r
i
o
n
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
x
S
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
 
}
>
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
r
o
u
n
d
 
=
 
r
o
u
n
d
s
[
r
o
u
n
d
I
n
d
e
x
]
!
;


 
 
 
 
c
o
n
s
t
 
c
r
i
t
e
r
i
a
 
=
 
r
o
u
n
d
.
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
.
m
a
p
(
(
c
,
 
i
)
 
=
>
 
(
i
 
=
=
=
 
c
r
i
t
I
n
d
e
x
 
?
 
{
 
.
.
.
c
,
 
.
.
.
u
p
d
a
t
e
s
 
}
 
:
 
c
)
)
;


 
 
 
 
u
p
d
a
t
e
R
o
u
n
d
(
r
o
u
n
d
I
n
d
e
x
,
 
{
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
c
r
i
t
e
r
i
a
 
}
)
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
m
o
v
e
C
r
i
t
e
r
i
o
n
 
=
 
(
r
o
u
n
d
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
c
r
i
t
I
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
r
o
u
n
d
 
=
 
r
o
u
n
d
s
[
r
o
u
n
d
I
n
d
e
x
]
!
;


 
 
 
 
u
p
d
a
t
e
R
o
u
n
d
(
r
o
u
n
d
I
n
d
e
x
,
 
{
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
r
o
u
n
d
.
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
.
f
i
l
t
e
r
(
(
_
,
 
i
)
 
=
>
 
i
 
!
=
=
 
c
r
i
t
I
n
d
e
x
)
 
}
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


 
 
 
 
 
 
{
r
o
u
n
d
s
.
m
a
p
(
(
r
o
u
n
d
,
 
i
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
R
o
u
n
d
I
t
e
m


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
r
o
u
n
d
=
{
r
o
u
n
d
}


 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
=
{
i
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
i
s
F
i
r
s
t
=
{
i
n
d
e
x
 
=
=
=
 
0
}


 
 
 
 
 
 
 
 
 
 
i
s
L
a
s
t
=
{
i
n
d
e
x
 
=
=
=
 
r
o
u
n
d
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
}


 
 
 
 
 
 
 
 
 
 
i
s
E
x
p
a
n
d
e
d
=
{
e
x
p
a
n
d
e
d
I
n
d
e
x
 
=
=
=
 
i
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
o
n
T
o
g
g
l
e
E
x
p
a
n
d
=
{
(
)
 
=
>
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
e
x
p
a
n
d
e
d
I
n
d
e
x
 
=
=
=
 
i
n
d
e
x
 
?
 
n
u
l
l
 
:
 
i
n
d
e
x
)
}


 
 
 
 
 
 
 
 
 
 
o
n
M
o
v
e
U
p
=
{
(
)
 
=
>
 
m
o
v
e
R
o
u
n
d
(
i
n
d
e
x
,
 
"
u
p
"
)
}


 
 
 
 
 
 
 
 
 
 
o
n
M
o
v
e
D
o
w
n
=
{
(
)
 
=
>
 
m
o
v
e
R
o
u
n
d
(
i
n
d
e
x
,
 
"
d
o
w
n
"
)
}


 
 
 
 
 
 
 
 
 
 
o
n
R
e
m
o
v
e
=
{
(
)
 
=
>
 
r
e
m
o
v
e
R
o
u
n
d
(
i
n
d
e
x
)
}


 
 
 
 
 
 
 
 
 
 
o
n
U
p
d
a
t
e
R
o
u
n
d
=
{
(
u
p
d
a
t
e
s
)
 
=
>
 
u
p
d
a
t
e
R
o
u
n
d
(
i
n
d
e
x
,
 
u
p
d
a
t
e
s
)
}


 
 
 
 
 
 
 
 
 
 
o
n
A
d
d
C
r
i
t
e
r
i
o
n
=
{
(
)
 
=
>
 
a
d
d
C
r
i
t
e
r
i
o
n
(
i
n
d
e
x
)
}


 
 
 
 
 
 
 
 
 
 
o
n
U
p
d
a
t
e
C
r
i
t
e
r
i
o
n
=
{
(
c
r
i
t
I
n
d
e
x
,
 
u
p
d
a
t
e
s
)
 
=
>
 
u
p
d
a
t
e
C
r
i
t
e
r
i
o
n
(
i
n
d
e
x
,
 
c
r
i
t
I
n
d
e
x
,
 
u
p
d
a
t
e
s
)
}


 
 
 
 
 
 
 
 
 
 
o
n
R
e
m
o
v
e
C
r
i
t
e
r
i
o
n
=
{
(
c
r
i
t
I
n
d
e
x
)
 
=
>
 
r
e
m
o
v
e
C
r
i
t
e
r
i
o
n
(
i
n
d
e
x
,
 
c
r
i
t
I
n
d
e
x
)
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
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
a
d
d
R
o
u
n
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
w
-
f
u
l
l
 
p
y
-
3
 
b
o
r
d
e
r
-
2
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
b
o
r
d
e
r
-
g
r
a
y
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
a
y
-
6
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
l
g
 
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
g
r
a
y
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
g
r
a
y
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
b
o
r
d
e
r
-
b
l
a
c
k
 
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
b
l
a
c
k
 
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
w
h
i
t
e
 
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


 
 
 
 
 
 
 
 
<
P
l
u
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
4
 
h
-
4
"
 
/
>
 
A
d
d
 
H
i
r
i
n
g
 
R
o
u
n
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


